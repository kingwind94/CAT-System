import { notification, Typography } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import FetchData from "../utils/FetchData";
import { NextQuestionButton, SectionBar } from "../utils/Utils";
import Pic from "../../play.png";
import ReactAudioPlayer from "react-audio-player";
import "./DragAndSwap.css";

const { Title, Text, Paragraph } = Typography;

function firstUpperCase(s) {
	return s.replace(/^\S/, (s) => s.toUpperCase());
}

const openNotification = () => {
	notification.open({
		message: "You should drag and drop to reorder the sentences before going to the next question.",
		duration: 2.5,
	});
};

class DragAndSwap extends Component {
	constructor(props) {
		super();
		this.state = {
			question: "Anagram_recess",
			numOfOptions: 0,
			textOptions: [],
			draggedTask: {},
			title: "",
			showElem: "none",
			audio: "",
		};
	}

	componentDidMount() {
		const questionText = this.props.curState.Anagram[this.state.question];
		const numOfOptions = questionText.numOfText;
		const textOptions = [];
		for (let i = 1; i <= numOfOptions; i++) {
			textOptions.push({ textId: i, text: questionText["text" + i], ansId: i });
		}
		for (let i = 1; i <= numOfOptions; i++) {
			textOptions.push({ textId: numOfOptions + i, text: "", ansId: numOfOptions + i });
		}
		this.setState({
			numOfOptions: numOfOptions,
			textOptions: textOptions,
			title: questionText.title,
			audio: questionText.audio,
		});
	}

	onDrag = (event, todo) => {
		event.preventDefault();
		this.setState({
			draggedTask: todo,
		});
		// console.log(todo)
	};

	onDragOver = (event) => {
		event.preventDefault();
	};

	onDrop = (event) => {
		const { textOptions, draggedTask } = this.state;
		let sourceText = draggedTask.text;
		let destText = textOptions[event.target.id - 1].text;
		let sourceAnsId = draggedTask.ansId;
		let destAnsId = textOptions[event.target.id - 1].ansId;
		const newTextOptions = this.state.textOptions.slice(); //copy the array
		//execute the manipulations
		newTextOptions[event.target.id - 1].text = sourceText;
		newTextOptions[draggedTask.textId - 1].text = destText;
		newTextOptions[event.target.id - 1].ansId = sourceAnsId;
		newTextOptions[draggedTask.textId - 1].ansId = destAnsId;
		this.setState({ textOptions: newTextOptions }); //set the new state
		// this.state.textOptions.forEach((element) => console.log(element.ansId));
	};

	getNextQuestion = async (e) => {
		const curTextOptions = this.state.textOptions;
		const numOfOptions = this.state.numOfOptions;
		let curAnsId = [];
		for (let idx = numOfOptions; idx < 2 * numOfOptions; idx++) {
			curAnsId.push(curTextOptions[idx].ansId);
		}
		let ans = "";
		for (let idx in curAnsId) {
			if (curAnsId[idx] > numOfOptions) {
				openNotification();
				return;
			}
			ans = ans + curAnsId[idx];
		}

		let recordAns = {
			question: this.state.question,
			answer: ans,
		};
		await FetchData("/UpdateCATAnswer/32", "PUT", recordAns)
			.then((res) => res.json())
			.then((res) => {
				// console.log(res);
			});

		// Get question texts and ans
		const questionText = this.props.curState.Anagram[this.state.question];

		// full credit
		const fullAnswer = questionText.fullAnswer;
		// 2/3 credit
		let partAnswer = [];
		if ("partAnswer" in questionText) {
			partAnswer = questionText.partAnswer;
		}
		// 1/3 credit
		let lessAnswer = [];
		if ("lessAnswer" in questionText) {
			lessAnswer = questionText.lessAnswer;
		}

		// judge student's answer
		let judgeOfAnswer = "";
		if (fullAnswer.includes(ans)) {
			judgeOfAnswer = "r." + this.state.question;
		} else if (partAnswer.length > 0) {
			if (partAnswer.includes(ans)) {
				judgeOfAnswer = "si." + this.state.question;
			} else {
				let gainTwoPoint = false;
				for (let idx in partAnswer) {
					let flag = true;
					const partAns = partAnswer[idx];
					for (let i = 0; i < partAns.length; i++) {
						if (partAns.charAt(i) === "0") continue;
						if (partAns.charAt(i) !== ans.charAt(i)) {
							flag = false;
							break;
						}
					}
					if (flag) {
						gainTwoPoint = true;
						break;
					}
				}
				if (gainTwoPoint) {
					judgeOfAnswer = "si." + this.state.question;
				}
			}
		}
		if (judgeOfAnswer !== "" && lessAnswer.length > 0) {
			let gainOnePoint = false;
			for (let idx in lessAnswer) {
				let flag = true;
				const lessAns = lessAnswer[idx];
				for (let i = 0; i < lessAns.length; i++) {
					if (lessAns.charAt(i) === "0") continue;
					if (lessAns.charAt(i) !== ans.charAt(i)) {
						flag = false;
						break;
					}
				}
				if (flag) {
					gainOnePoint = true;
					break;
				}
			}
			if (gainOnePoint) {
				judgeOfAnswer = "tre." + this.state.question;
			} else {
				judgeOfAnswer = "w." + this.state.question;
			}
		} else {
			judgeOfAnswer = "w." + this.state.question;
		}

		console.log(judgeOfAnswer);

		await this.props.answerQuestionAns(judgeOfAnswer, this.state.question);

		let data = {
			questionAns: this.props.curState.questionAns,
			questionAnsSum: this.props.curState.questionAnsSum,
			questions: this.props.curState.questions,
			questionSum: this.props.curState.questionSum,
			sectionName: "ANAGRAMS",
			numQuestions: this.props.curState.numQuestions,
		};

		console.log(data);

		await FetchData("/sumCorrectIncorrect", "PUT", data)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				if (res.nextQuestion === "") {
					this.props.clearNumQuestions();
					this.props.history.push("/section4");
				} else {
					this.setState({ question: firstUpperCase(res.nextQuestion) });
					this.componentDidMount();
				}
			});
	};

	playAudio = () => {
		this.setState({
			showElem: "inline",
		});
	};

	render() {
		const { textOptions, numOfOptions } = this.state;

		return (
			<div className="DragAndSwap">
				<Title level={3} align="middle">
					{this.state.title}
				</Title>
				<div style={{ marginBottom: "5px", height: "50px" }}>
					<img onClick={this.playAudio} src={Pic} height="54px" width="54px" alt="img" />
					<ReactAudioPlayer
						style={{ display: this.state.showElem, verticalAlign: "middle" }}
						src={this.state.audio}
						controls
					></ReactAudioPlayer>
				</div>
				<div className="DragAndDropApp">
					<div className="texts">
						{textOptions.slice(0, numOfOptions).map((option) => (
							<div
								className="item1"
								key={option.textId}
								id={option.textId}
								draggable
								onDrag={(event) => this.onDrag(event, option)}
								onDrop={(event) => this.onDrop(event)}
								onDragOver={(event) => this.onDragOver(event)}
							>
								{option.text}
							</div>
						))}
					</div>

					<div className="answer">
						{textOptions.slice(numOfOptions).map((option) => (
							<div
								className="item2"
								key={option.textId}
								id={option.textId}
								draggable
								onDrag={(event) => this.onDrag(event, option)}
								onDrop={(event) => this.onDrop(event)}
								onDragOver={(event) => this.onDragOver(event)}
							>
								{option.text}
							</div>
						))}
					</div>
				</div>

				<NextQuestionButton getNextQuestion={this.getNextQuestion} />

				<div style={{ position: "absolute", bottom: "0px", width: "100%" }}>
					<SectionBar numSection={3} />
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

export default connect(mapStateToProps, mapDispatchToProps)(DragAndSwap);
