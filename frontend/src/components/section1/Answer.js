import React, { Component } from "react";
import { Card, Radio, Button, Row, Col, Typography } from "antd";
import { connect } from "react-redux";
import { compose } from "redux";
import { notification } from "antd";
import { Divider } from "antd";
import ReactAudioPlayer from "react-audio-player";
import { withRouter } from "react-router";

import Pic from "../../play.png";
import FetchData from "../../FetchData";

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

function TwoPictures(props) {
	return (
		<Row justify="space-around" gutter={[16, 24]}>
			<Col span={10}>
				<img
					src={props.picture1}
					width="100%"
					height="450px"
					style={{
						position: "relative",
						left: "50%",
						top: "50%",
						transform: "translate(-50%, -50%)",
						maxHeight: "500px",
						maxWidth: "500px",
					}}
				/>
			</Col>
			<Col span={10}>
				<img
					src={props.picture2}
					width="100%"
					height="450px"
					style={{
						position: "relative",
						left: "50%",
						top: "50%",
						transform: "translate(-50%, -50%)",
						maxHeight: "500px",
						maxWidth: "500px",
					}}
				/>
			</Col>
		</Row>
	);
}

class Answer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: 0,
			blank: "_______",
			radioColor1: "black",
			radioColor2: "black",
			radioColor3: "black",
			radioColor4: "black",
			fontSize: "large",
			question: "Connect_pic_therefore_B",
			curAnswer: "",
			showElem: "none",
		};
	}

	onChange = (e) => {
		var choice = eval("this.props.curState." + String(this.state.question) + ".choice");
		// console.log("radio checked", e.target.value);
		this.setState({
			value: e.target.value,
			curAnswer: e.target.value,
		});
		if (e.target.value === 1) {
			this.setState({
				blank: choice[0],
				radioColor1: "green",
				radioColor2: "black",
				radioColor3: "black",
				radioColor4: "black",
			});
		} else if (e.target.value === 2) {
			this.setState({
				blank: choice[1],
				radioColor1: "black",
				radioColor2: "green",
				radioColor3: "black",
				radioColor4: "black",
			});
		} else if (e.target.value === 3) {
			this.setState({
				blank: choice[2],
				radioColor1: "black",
				radioColor2: "black",
				radioColor3: "green",
				radioColor4: "black",
			});
		} else {
			this.setState({
				blank: choice[3],
				radioColor1: "black",
				radioColor2: "black",
				radioColor3: "black",
				radioColor4: "green",
			});
		}
	};

	getNextQuestion = async (e) => {
		// const url = (path) => `http://localhost:5000${path}`;
		if (this.state.curAnswer === "") {
			openNotification();
			return;
		}

		let ans;
		switch (this.state.value) {
			case 1:
				ans = "A";
				break;
			case 2:
				ans = "B";
				break;
			case 3:
				ans = "C";
				break;
			case 4:
				ans = "D";
				break;
			default:
				break;
		}

		let catAns = {
			question: this.state.question,
			answer: ans,
		};
		await FetchData("/UpdateCATAnswer/1", "PUT", catAns)
			.then((res) => res.json())
			.then((res) => {
				// console.log(res);
			});

		let judgeOfAnswer;
		const questionText = eval("this.props.curState." + String(this.state.question) + ".answer");

		if (questionText === this.state.curAnswer) {
			judgeOfAnswer = "r." + this.state.question;
		} else {
			judgeOfAnswer = "w." + this.state.question;
		}
		// console.log("judgeOfAnswer: " + judgeOfAnswer);

		await this.props.answerQuestionAns(judgeOfAnswer, this.state.question);
		console.log(this.props.curState.questionAns);
		console.log(this.props.curState.questionAnsSum);
		console.log(this.props.curState.questions);
		console.log(this.props.curState.questionSum);

		let data = {
			questionAns: this.props.curState.questionAns,
			questionAnsSum: this.props.curState.questionAnsSum,
			questions: this.props.curState.questions,
			questionSum: this.props.curState.questionSum,
			sectionName: "CONNECTIVES_PICTURES",
			numQuestions: this.props.curState.numQuestions,
		};

		this.setState({ value: 0, curAnswer: "" });
		this.setState({
			radioColor1: "black",
			radioColor2: "black",
			radioColor3: "black",
			radioColor4: "black",
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
					this.props.history.push("/section2");
				} else {
					this.setState({ question: firstUpperCase(res.nextQuestion) });
					this.setState({ blank: "_______" });
				}
			});
	};

	fontSmaller = (e) => {
		this.setState({
			fontSize: "large",
		});
		this.props.fontSizeDispatch("large");
	};

	fontLarger = (e) => {
		this.setState({
			fontSize: "x-large",
		});
		this.props.fontSizeDispatch("x-large");
	};

	playAudio = () => {
		this.setState({
			showElem: "inline",
		});
	};

	render() {
		var choice = eval("this.props.curState." + String(this.state.question) + ".choice");
		var questionText1 = eval("this.props.curState." + String(this.state.question) + ".text1");
		var questionText2 = eval("this.props.curState." + String(this.state.question) + ".text2");
		var picture1 = eval("this.props.curState." + String(this.state.question) + ".picture1");
		var picture2 = eval("this.props.curState." + String(this.state.question) + ".picture2");
		var audio = eval("this.props.curState." + String(this.state.question) + ".audio");

		return (
			<Card>
				<Row>
					<Col span={1}>
						<Text style={{ fontSize: "small" }} onClick={this.fontSmaller}>
							A
						</Text>
						<Text style={{ fontSize: "large" }} onClick={this.fontLarger}>
							A
						</Text>
					</Col>
				</Row>
				<TwoPictures picture1={picture1} picture2={picture2} />
				<Divider />
				<Row>
					<Col span={2}></Col>
					<Col span={20} style={{ fontSize: this.state.fontSize }}>
						<div style={{ marginBottom: "5px", height: "50px" }}>
							<img onClick={this.playAudio} src={Pic} height="54px" width="54px" />
							<ReactAudioPlayer style={{ display: this.state.showElem, verticalAlign: "middle" }} src={audio} controls></ReactAudioPlayer>
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
										color: this.state.radioColor1,
										fontSize: this.state.fontSize,
									}}
									value={1}
								>
									{choice[0]}
								</Radio>
								<Radio
									style={{
										color: this.state.radioColor2,
										fontSize: this.state.fontSize,
									}}
									value={2}
								>
									{choice[1]}
								</Radio>
								<Radio
									style={{
										color: this.state.radioColor3,
										fontSize: this.state.fontSize,
									}}
									value={3}
								>
									{choice[2]}
								</Radio>
								<Radio
									style={{
										color: this.state.radioColor4,
										fontSize: this.state.fontSize,
									}}
									value={4}
								>
									{choice[3]}
								</Radio>
							</Radio.Group>
						</div>

						<div style={{ marginTop: "20px", float: "right" }}>
							<Button size={this.state.fontSize} danger onClick={this.getNextQuestion} style={{ color: "green", borderColor: "green" }}>
								Next
							</Button>
						</div>
					</Col>
				</Row>
			</Card>
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

		fontSizeDispatch(size) {
			// console.log(size)
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

const mapStateToProps = (state, ownProps) => {
	return {
		curState: state,
	};
};

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Answer);
