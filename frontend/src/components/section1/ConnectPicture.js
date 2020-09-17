import { Button, Col, Divider, notification, Radio, Row, Typography } from "antd";
import React, { Component } from "react";
import ReactAudioPlayer from "react-audio-player";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import FetchData from "../../FetchData";
import Pic from "../../play.png";
import { SectionBar, TwoPictures } from "../utils/Utils";
import "./Style.css";

const { Text } = Typography;

function firstUpperCase(s) {
	return s.replace(/^\S/, (s) => s.toUpperCase());
}

const openNotification = () => {
	notification.open({
		message: "You should choose an option to go next.",
		duration: 2.5,
	});
};

class ConnectPicture extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: -1,
			blank: "_______",
			radioColor: ["black", "black", "black", "black"],
			question: "Connect_pic_therefore_B",
			showElem: "none",
		};
	}

	onChange = (e) => {
		console.log(this.props.curState);
		let choice = eval("this.props.curState." + String(this.state.question) + ".choice");
		this.setState({
			value: e.target.value,
			blank: choice[e.target.value],
		});

		let newRadioColor = ["black", "black", "black", "black"];
		newRadioColor[e.target.value] = "green";
		this.setState({ radioColor: newRadioColor });
	};

	getNextQuestion = async (e) => {
		if (this.state.value === -1) {
			openNotification();
			return;
		}

		const ABCD = ["a", "b", "c", "d"];
		let ans = ABCD[this.state.value];

		let catAns = {
			question: this.state.question,
			answer: ans,
		};
		await FetchData("/UpdateCATAnswer/32", "PUT", catAns)
			.then((res) => res.json())
			.then((res) => {
				// console.log(res);
			});

		let judgeOfAnswer;
		const questionText = eval("this.props.curState." + String(this.state.question) + ".answer") - 1;

		if (questionText === this.state.value) {
			judgeOfAnswer = "r." + this.state.question;
		} else {
			judgeOfAnswer = "w." + this.state.question;
		}
		// console.log("judgeOfAnswer: " + judgeOfAnswer);

		await this.props.answerQuestionAns(judgeOfAnswer, this.state.question);
		// console.log(this.props.curState.questionAns);
		// console.log(this.props.curState.questionAnsSum);
		// console.log(this.props.curState.questions);
		// console.log(this.props.curState.questionSum);

		let data = {
			questionAns: this.props.curState.questionAns,
			questionAnsSum: this.props.curState.questionAnsSum,
			questions: this.props.curState.questions,
			questionSum: this.props.curState.questionSum,
			sectionName: "CONNECTIVES_PICTURES",
			numQuestions: this.props.curState.numQuestions,
		};

		this.setState({
			value: -1,
			radioColor: ["black", "black", "black", "black"],
		});

		await FetchData("/sumCorrectIncorrect", "PUT", data)
			.then((res) => {
				if (res.status === 200) {
					return res.json();
				} else {
				}
			})
			.then((res) => {
				console.log(res);
				// window.localStorage.question = firstUpperCase(String(res.nextQuestion));
				if (res.nextQuestion === "") {
					this.props.history.push("/section1_2");
				} else {
					this.setState({ question: firstUpperCase(res.nextQuestion) });
					this.setState({ blank: "_______" });
				}
			});
	};

	playAudio = () => {
		this.setState({
			showElem: "inline",
		});
	};

	render() {
		let choice = eval("this.props.curState." + String(this.state.question) + ".choice");
		let questionText1 = eval("this.props.curState." + String(this.state.question) + ".text1");
		let questionText2 = eval("this.props.curState." + String(this.state.question) + ".text2");
		let picture1 = eval("this.props.curState." + String(this.state.question) + ".picture1");
		let picture2 = eval("this.props.curState." + String(this.state.question) + ".picture2");
		let audio = eval("this.props.curState." + String(this.state.question) + ".audio");

		return (
			<div className="connect_picture" style={{ fontSize: this.props.curState.fontSize }}>
				<div style={{ position: "absolute", top: "0%", width: "100%" }}>
					<TwoPictures picture1={picture1} picture2={picture2} />
					<Divider />
					<Row>
						<Col span={22} offset={1}>
							<div style={{ marginBottom: "5px", height: "50px" }}>
								<img onClick={this.playAudio} src={Pic} height="54px" width="54px" />
								<ReactAudioPlayer
									style={{ display: this.state.showElem, verticalAlign: "middle" }}
									src={audio}
									controls
								></ReactAudioPlayer>
							</div>
							<Text strong style={{ color: "black" }}>
								{questionText1}
							</Text>
							<Text underline strong style={{ color: "green" }}>
								{this.state.blank}
							</Text>
							<Text strong style={{ color: "black" }}>
								{questionText2}
							</Text>

							<div style={{ margin: "15px" }}>
								<Radio.Group onChange={this.onChange} size="large" value={this.state.value}>
									<Radio
										style={{
											color: this.state.radioColor[0],
											fontSize: this.props.curState.fontSize,
										}}
										value={0}
									>
										{choice[0]}
									</Radio>
									<Radio
										style={{
											color: this.state.radioColor[1],
											fontSize: this.props.curState.fontSize,
										}}
										value={1}
									>
										{choice[1]}
									</Radio>
									<Radio
										style={{
											color: this.state.radioColor[2],
											fontSize: this.props.curState.fontSize,
										}}
										value={2}
									>
										{choice[2]}
									</Radio>
									<Radio
										style={{
											color: this.state.radioColor[3],
											fontSize: this.props.curState.fontSize,
										}}
										value={3}
									>
										{choice[3]}
									</Radio>
								</Radio.Group>
							</div>

							<div style={{ marginTop: "40px", float: "right" }}>
								<Button
									size="large"
									danger
									onClick={this.getNextQuestion}
									style={{ color: "green", borderColor: "green" }}
								>
									Next
								</Button>
							</div>
						</Col>
					</Row>
				</div>
				<div style={{ position: "absolute", bottom: "0px", width: "100%" }}>
					<SectionBar numSection={1} />
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleClick() {
			const action = {
				type: "add_sessionNum",
			};
			dispatch(action);
		},
		answerQuestionAns(questionAns, question) {
			const action = {
				type: "ANSWER_QUESTION",
				questionAns: questionAns,
				question: question,
			};
			dispatch(action);
		},
	};
};

const mapStateToProps = (state, ownProps) => {
	return {
		curState: state,
	};
};

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(ConnectPicture);
