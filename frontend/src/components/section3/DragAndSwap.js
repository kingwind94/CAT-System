import { notification } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import FetchData from "../utils/FetchData";
import { NextQuestionButton, SectionBar } from "../utils/Utils";
import "./DragAndSwap.css";

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
		};
	}

	componentDidMount() {
		const questionText = this.props.curState[this.state.question];
		const numOfOptions = questionText.numOfText;
		const textOptions = [];
		for (let i = 1; i <= numOfOptions; i++) {
			textOptions.push({ textId: i, text: questionText["text" + i] });
		}
		for (let i = 1; i <= numOfOptions; i++) {
			textOptions.push({ textId: numOfOptions + i, text: "" });
		}
		this.setState({
			numOfOptions: numOfOptions,
			textOptions: textOptions,
		});
	}

	onDrag = (event, todo) => {
		event.preventDefault();
		this.setState({
			draggedTask: todo,
		});
	};

	onDragOver = (event) => {
		event.preventDefault();
	};

	onDrop = (event) => {
		const { textOptions, draggedTask } = this.state;
		let sourceText = draggedTask.text;
		let sourceId = draggedTask.textId;
		let destText = textOptions[event.target.id - 1].text;
		let destId = textOptions[event.target.id - 1].textId;
		const newTextOptions = this.state.textOptions.slice(); //copy the array
		newTextOptions[event.target.id - 1].text = sourceText; //execute the manipulations
		newTextOptions[draggedTask.textId - 1].text = destText; //execute the manipulations
		newTextOptions[event.target.id - 1].textId = sourceId;
		newTextOptions[draggedTask.textId - 1].textId = destId;
		this.setState({ textOptions: newTextOptions }); //set the new state
	};

	getNextQuestion = async (e) => {
		const curTextOptions = this.state.textOptions;
		const numOfOptions = this.state.numOfOptions;
		let curTextId = [];
		for (let idx in curTextOptions) {
			curTextId.push(curTextOptions[idx].textId);
		}
		curTextId = curTextId.slice(numOfOptions);
		let ans = "";
		for (let idx in curTextId) {
			if (curTextId[idx] > numOfOptions) {
				openNotification();
				return;
			}
			ans = ans + curTextId[idx];
		}

		let catAns = {
			question: this.state.question,
			answer: ans,
		};
		await FetchData("/UpdateCATAnswer/32", "PUT", catAns)
			.then((res) => res.json())
			.then((res) => {
				// console.log(res);
			});

		const questionText = this.props.curState[this.state.question];

		const fullAnswer = questionText.fullAnswer;
		const partAnswer = questionText.partAnswer;
		let lessAnswer = [];
		if ("lessAnswer" in questionText) {
			lessAnswer = questionText.lessAnswer;
		}

		let judgeOfAnswer;
		if (fullAnswer.includes(ans)) {
			judgeOfAnswer = "r." + this.state.question;
		} else if (partAnswer.includes(ans)) {
			judgeOfAnswer = "si." + this.state.question;
		} else if (lessAnswer.length > 0) {
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

		await this.props.answerQuestionAns(judgeOfAnswer, this.state.question);

		let data = {
			questionAns: this.props.curState.questionAns,
			questionAnsSum: this.props.curState.questionAnsSum,
			questions: this.props.curState.questions,
			questionSum: this.props.curState.questionSum,
			sectionName: "ANAGRAMS",
			numQuestions: this.props.curState.numQuestions,
		};

		await FetchData("/sumCorrectIncorrect", "PUT", data)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				if (res.nextQuestion === "") {
					this.props.history.push("/section4");
				} else {
					this.setState({ question: firstUpperCase(res.nextQuestion) });
				}
			});
	};

	render() {
		const { textOptions, numOfOptions } = this.state;

		return (
			<div className="DragAndSwap">
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
		curState: state.Anagram,
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
