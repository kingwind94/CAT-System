import { Col, notification, Row } from "antd";
import React, { Component } from "react";
import ReactAudioPlayer from "react-audio-player";
import { connect } from "react-redux";
import Pic from "../../play.png";
import FetchData from "../utils/FetchData";
import { NextQuestionButton, SectionBar } from "../utils/Utils";

const openNotification = () => {
	notification.open({
		message: "You should choose an option to go next.",
		duration: 2.5,
	});
};

function firstUpperCase(s) {
	return s.replace(/^\S/, (s) => s.toUpperCase());
}

class ComprehendingSentences extends Component {
	constructor(props) {
		super();

		this.state = {
			selectOption: -1,
			question: "Syntax_pic_1",
			borderStyle: ["none", "none", "none", "none"],
			showElem: "none",
		};
	}

	onClick = (e, val) => {
		this.setState({ selectOption: val });
		let newBorderStyle = ["none", "none", "none", "none"];
		newBorderStyle[val - 1] = "solid";
		this.setState({ borderStyle: newBorderStyle });
	};

	getNextQuestion = async (e) => {
		if (this.state.selectOption === -1) {
			openNotification();
			return;
		}

		let catAns = {
			question: this.state.question,
			answer: this.state.selectOption,
		};
		await FetchData("/UpdateCATAnswer/32", "PUT", catAns)
			.then((res) => res.json())
			.then((res) => {
				// console.log(res);
			});

		let judgeOfAnswer;
		const correctAns = this.props.curState.SYNTAX_PICTURES[this.state.question].answer;

		if (correctAns === this.state.selectOption) {
			judgeOfAnswer = "r." + this.state.question;
		} else {
			judgeOfAnswer = "w." + this.state.question;
		}

		console.log(judgeOfAnswer)

		await this.props.answerQuestionAns(judgeOfAnswer, this.state.question);

		let data = {
			questionAns: this.props.curState.questionAns,
			questionAnsSum: this.props.curState.questionAnsSum,
			questions: this.props.curState.questions,
			questionSum: this.props.curState.questionSum,
			sectionName: "SYNTAX_PICTURES",
			numQuestions: this.props.curState.numQuestions,
		};

		this.setState({
			selectOption: -1,
			borderStyle: ["none", "none", "none", "none"],
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
					this.props.clearNumQuestions();
					this.props.history.push("/section6");
				} else {
					this.setState({ question: firstUpperCase(res.nextQuestion) });
				}
			});
	};

	render() {
		const picture1 = this.props.curState.SYNTAX_PICTURES[this.state.question].picture1;
		const picture2 = this.props.curState.SYNTAX_PICTURES[this.state.question].picture2;
		const picture3 = this.props.curState.SYNTAX_PICTURES[this.state.question].picture3;
		const picture4 = this.props.curState.SYNTAX_PICTURES[this.state.question].picture4;
		const audio = this.props.curState.SYNTAX_PICTURES[this.state.question].audio;

		return (
			<div className="main-context-div" style={{ fontSize: this.props.fontSize }}>
				<div className="comprehending_sentences">
					<div>
						<img src={Pic} height="54px" width="54px" alt="img" />
						<ReactAudioPlayer
							style={{ display: this.state.showElem }}
							src={audio}
							controls
							autoPlay={true}
						></ReactAudioPlayer>
					</div>
					<div>
						<Row justify="space-around" gutter={[16, 24]}>
							<Col span={10} offset={4}>
								<img
									src={picture1}
									onClick={(e) => this.onClick(e, 1)}
									style={{ borderStyle: this.state.borderStyle[0] }}
									alt="img"
								/>
							</Col>

							<Col span={10}>
								<img
									src={picture2}
									onClick={(e) => this.onClick(e, 2)}
									style={{ borderStyle: this.state.borderStyle[1] }}
									alt="img"
								/>
							</Col>
						</Row>
						<Row justify="space-around" gutter={[16, 24]}>
							<Col span={10} offset={4}>
								<img
									src={picture3}
									onClick={(e) => this.onClick(e, 3)}
									style={{ borderStyle: this.state.borderStyle[2] }}
									alt="img"
								/>
							</Col>

							<Col span={10}>
								<img
									src={picture4}
									onClick={(e) => this.onClick(e, 4)}
									style={{ borderStyle: this.state.borderStyle[3] }}
									alt="img"
								/>
							</Col>
						</Row>
					</div>
				</div>

				<NextQuestionButton getNextQuestion={this.getNextQuestion} />

				<div style={{ position: "absolute", bottom: "0px", width: "100%" }}>
					<SectionBar numSection={5} />
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		fontSize: state.fontSize,
		curState: state,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		answerQuestionAns(questionAns, question) {
			const action = {
				type: "ANSWER_QUESTION",
				questionAns: questionAns,
				question: question,
			};
			dispatch(action);
		},
		clearNumQuestions() {
			const action = {
				type: "CLEAR_NUM_QUESTION",
			};
			dispatch(action);
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ComprehendingSentences);
