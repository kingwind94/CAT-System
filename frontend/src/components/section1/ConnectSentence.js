import { Button, notification, Radio, Row, Typography } from "antd";
import React, { Component } from "react";
import ReactAudioPlayer from "react-audio-player";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import FetchData from "../../FetchData";
import Pic from "../../play.png";
import { SectionBar } from "../utils/Utils";
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

const SectionName = "CONNECTIVES_SENTENCES";

class ConnectSentence extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bodyText: "",
			blank: "________________",
			selectOption: -1,
			question: "Connect_sent_however",
			radioColor: ["black", "black", "black"],
			showElem: "none",
		};
	}

	onChange = (e) => {
		let choice = this.props.curState[this.state.question].choice;

		this.setState({
			selectOption: e.target.value,
			blank: choice[e.target.value],
		});

		let newRadioColor = ["black", "black", "black"];
		newRadioColor[e.target.value] = "green";
		this.setState({ radioColor: newRadioColor });
	};

	playAudio = () => {
		this.setState({
			showElem: "inline",
		});
	};

	getNextQuestion = async (e) => {
		if (this.state.selectOption === -1) {
			openNotification();
			return;
		}

		let ans;
		switch (this.state.selectOption) {
			case 1:
				ans = "A";
				break;
			case 2:
				ans = "B";
				break;
			case 3:
				ans = "C";
				break;
			default:
				break;
		}

		let catAns = {
			question: this.state.question,
			answer: ans,
		};
		await FetchData("/UpdateCATAnswer/32", "PUT", catAns)
			.then((res) => res.json())
			.then((res) => {
				// console.log("UpdateCATAnswer: " + res);
			});

		let judgeOfAnswer;
		const correctAns = this.props.curState[this.state.question].answer - 1;

		if (correctAns === this.state.selectOption) {
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
			sectionName: SectionName,
			numQuestions: this.props.curState.numQuestions - 4,
		};

		this.setState({
			selectOption: -1,
			radioColor: ["black", "black", "black"],
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
				if (res.nextQuestion === "") {
					this.props.history.push("/section2");
				} else {
					this.setState({ question: firstUpperCase(res.nextQuestion) });
					this.setState({ blank: "________________" });
				}
			});
	};

	render() {
		let choice = this.props.curState[this.state.question].choice;
		let questionText1 = this.props.curState[this.state.question].text1;
		let questionText2 = this.props.curState[this.state.question].text2;
		let audio = this.props.curState[this.state.question].audio

		return (
			<div className="connect_sentence">
				<div style={{ paddingLeft: "5%", paddingRight: "5%", position: "absolute", top: "15%", width: "100%" }}>
					<Row>
						<div style={{ marginBottom: "5px", height: "50px" }}>
							<img onClick={this.playAudio} src={Pic} height="54px" width="54px" />
							<ReactAudioPlayer
								style={{ display: this.state.showElem, verticalAlign: "middle" }}
								src={audio}
								controls
							></ReactAudioPlayer>
						</div>
					</Row>
					<Row>
						<div style={{ fontSize: this.props.curState.fontSize, margin: "10px" }}>
							<Text style={{ color: "black" }}>{questionText1}</Text>
							<Text strong style={{ color: "black" }}>
								{questionText2}
							</Text>
							<Text underline style={{ color: "green" }}>
								{this.state.blank}
							</Text>
						</div>
					</Row>
					<Row>
						<div style={{ margin: "10px", paddingLeft: "20px" }}>
							<Radio.Group size="large" onChange={this.onChange} value={this.state.selectOption}>
								<Radio
									style={{
										color: this.state.radioColor[0],
										fontSize: this.props.curState.fontSize,
										display: "block",
									}}
									value={0}
								>
									{choice[0]}
								</Radio>
								<Radio
									style={{
										color: this.state.radioColor[1],
										fontSize: this.props.curState.fontSize,
										display: "block",
									}}
									value={1}
								>
									{choice[1]}
								</Radio>
								<Radio
									style={{
										color: this.state.radioColor[2],
										fontSize: this.props.curState.fontSize,
										display: "block",
									}}
									value={2}
								>
									{choice[2]}
								</Radio>
							</Radio.Group>
						</div>
					</Row>

					<Row justify="end">
						<div style={{ marginTop: "20px", float: "right" }}>
							<Button
								size={this.props.curState.fontSize}
								danger
								onClick={this.getNextQuestion}
								style={{ color: "green", borderColor: "green" }}
							>
								Next
							</Button>
						</div>
					</Row>
				</div>
				<div style={{ position: "absolute", bottom: "0px", width: "100%" }}>
					<SectionBar numSection={1} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		curState: state,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		fontSizeDispatch(size) {
			const action = {
				type: "update_fontSize",
				value: size,
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

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(ConnectSentence);
