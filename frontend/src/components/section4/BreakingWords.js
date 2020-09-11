import React, { Component } from "react";
import { Card, Typography, Radio, Button } from "antd";
import { notification } from "antd";
import { connect } from "react-redux";
import { Divider } from "antd";
import { Link } from "react-router-dom";
import { Input } from "antd";
import ReactAudioPlayer from "react-audio-player";

import { SectionBar } from "../utils/Utils";

import "../style/UniformStyle.css";
import FetchData from "../../FetchData";
import Pic from "../../play.png";

const { Title, Text, Paragraph } = Typography;

const openNotification = () => {
	notification.open({
		message: "You should choose an option to go next.",
		duration: 2.5,
	});
};

function firstUpperCase(s) {
	return s.replace(/^\S/, (s) => s.toUpperCase());
}

class BreakingWords extends Component {
	constructor(props) {
		super(props);

		this.state = {
			answerText: "",
			question: "Morpho_activity",
			showElem: "none",
		};
	}

	onChange = (e) => {
		this.setState({ answerText: e.target.value });
	};

	playAudio = () => {
		this.setState({
			showElem: "inline",
		});
	};

	getNextQuestion = async (e) => {
		if (this.state.answerText === "") {
			openNotification();
			return;
		}

		let catAns = {
			question: this.state.question,
			answer: this.state.answerText,
		};
		await FetchData("/UpdateCATAnswer/32", "PUT", catAns)
			.then((res) => res.json())
			.then((res) => {
				// console.log(res);
			});

		let judgeOfAnswer;
		const correctAns = eval("this.props.curState." + String(this.state.question) + ".answer");

		if (correctAns.includes(this.state.answerText)) {
			judgeOfAnswer = "r." + this.state.question;
		} else {
			judgeOfAnswer = "w." + this.state.question;
		}

		await this.props.answerQuestionAns(judgeOfAnswer, this.state.question);

		let data = {
			questionAns: this.props.curState.questionAns,
			questionAnsSum: this.props.curState.questionAnsSum,
			questions: this.props.curState.questions,
			questionSum: this.props.curState.questionSum,
			sectionName: "MORPHOLOGY",
			numQuestions: this.props.curState.numQuestions,
		};

		this.setState({
			answerText: "",
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
					this.props.clearNumQuestions();
					this.props.history.push("/section3");
				} else {
					this.setState({ question: firstUpperCase(res.nextQuestion) });
				}
			});
	};

	render() {
		const questionText1 = eval("this.props.curState." + String(this.state.question) + ".text1");
		const questionText2 = eval("this.props.curState." + String(this.state.question) + ".text2");
		const keyword = eval("this.props.curState." + String(this.state.question) + ".keyword");
		const audio = eval("this.props.curState." + String(this.state.question) + ".audio");

		return (
			<div className="breaking_words">
				<div className="main_context">
					<div>
						<img onClick={this.playAudio} src={Pic} height="54px" width="54px" />
						<ReactAudioPlayer
							style={{ display: this.state.showElem }}
							src={audio}
							controls
						></ReactAudioPlayer>
					</div>
					<div style={{ fontSize: this.props.curState.fontSize }} className="question_text">
						<div style={{color:"green"}}>{keyword} </div>
						<div>{questionText1}</div>
						<div>
							<input value={this.state.answerText} onChange={this.onChange} />
						</div>
						<div>{questionText2}</div>
					</div>

					<div className="button_div">
						<Button
							danger
							size={this.props.curState.fontSize}
							onClick={this.getNextQuestion}
							style={{ color: "green", borderColor: "green" }}
						>
							Next
						</Button>
					</div>
				</div>

				<div>
					<SectionBar numSection={4} />
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

export default connect(mapStateToProps, mapDispatchToProps)(BreakingWords);
