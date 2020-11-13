import { notification, Radio, Typography } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import FetchData from "../utils/FetchData";
import { NextQuestionButton, SectionBar } from "../utils/Utils";
import Pic from "../../play.png";
import ReactAudioPlayer from "react-audio-player";

const { Text, Paragraph } = Typography;

const openNotification = () => {
	notification.open({
		message: "You should choose an option to go next.",
		duration: 2.5,
	});
};

function firstUpperCase(s) {
	return s.replace(/^\S/, (s) => s.toUpperCase());
}

class TrackingTheme extends Component {
	constructor(props) {
		super();

		this.state = {
			value: -1,
			radioColor: ["black", "black", "black"],
			question: "Anaphora_material",
			showElem: "none",
		};
	}

	onChange = (e) => {
		this.setState({
			value: e.target.value,
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
		if (this.state.value === -1) {
			openNotification();
			return;
		}

		const ABC = ["a", "b", "c"];
		let ans = ABC[this.state.value];

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
		const questionText = this.props.curState[this.state.question].answer - 1;

		if (questionText === this.state.value) {
			judgeOfAnswer = "r." + this.state.question;
		} else {
			judgeOfAnswer = "w." + this.state.question;
		}
		// console.log("judgeOfAnswer: " + judgeOfAnswer);

		await this.props.answerQuestionAns(judgeOfAnswer, this.state.question);

		let data = {
			questionAns: this.props.curState.questionAns,
			questionAnsSum: this.props.curState.questionAnsSum,
			questions: this.props.curState.questions,
			questionSum: this.props.curState.questionSum,
			sectionName: "ANAPHORA",
			numQuestions: this.props.curState.numQuestions,
		};

		// console.log(data);

		this.setState({
			value: -1,
			radioColor: ["black", "black", "black"],
		});

		await FetchData("/sumCorrectIncorrect", "PUT", data)
			.then((res) => {
				if (res.status === 200) {
					// console.log(res);
					return res.json();
				} else {
				}
			})
			.then((res) => {
				// console.log(res);
				if (res.nextQuestion === "") {
					this.props.clearNumQuestions();
					this.props.history.push("/section3");
				} else {
					this.setState({ question: firstUpperCase(res.nextQuestion) });
				}
			});
	};

	render() {
		const choice = this.props.curState[this.state.question].choice;
		const questionText1 = this.props.curState[this.state.question].text1;
		const questionText2 = this.props.curState[this.state.question].text2;
		const keyword = this.props.curState[this.state.question].keyword;
		const audio = this.props.curState[this.state.question].audio;

		return (
			<div className="main-context-div" style={{ fontSize: this.props.curState.fontSize }}>
				<div className="tracking_theme">
					<div style={{ marginBottom: "5px", height: "50px" }}>
						<img onClick={this.playAudio} src={Pic} height="54px" width="54px" alt="img" />
						<ReactAudioPlayer
							style={{ display: this.state.showElem, verticalAlign: "middle" }}
							src={audio}
							controls
						></ReactAudioPlayer>
					</div>
					<div
						style={{
							backgroundColor: "lightgray",
							width: "100%",
							// height: "100px",
							padding: "20px",
						}}
					>
						<Paragraph strong style={{ color: "black" }}>
							{questionText1}{" "}
							<Text underline strong style={{ color: "green" }}>
								{keyword}
							</Text>{" "}
							{questionText2}
						</Paragraph>
					</div>

					<div style={{ marginTop: "40px" }}>
						<Paragraph style={{ color: "black" }}>In the text above,</Paragraph>
						<Paragraph underline strong style={{ color: "black", textAlign: "center" }}>
							{keyword}
						</Paragraph>
						<Paragraph strong style={{ color: "black", textAlign: "center" }}>
							refers to:
						</Paragraph>

						<div
							style={{ margin: "40px", display: "flex", justifyContent: "center", alignItems: "center" }}
						>
							<Radio.Group onChange={this.onChange} value={this.state.value}>
								<Radio
									style={{
										color: this.state.radioColor[0],
										fontSize: this.props.fontSize,
									}}
									value={0}
								>
									{choice[0]}
								</Radio>
								<Radio
									style={{
										color: this.state.radioColor[1],
										fontSize: this.props.fontSize,
									}}
									value={1}
								>
									{choice[1]}
								</Radio>
								<Radio
									style={{
										color: this.state.radioColor[2],
										fontSize: this.props.fontSize,
									}}
									value={2}
								>
									{choice[2]}
								</Radio>
							</Radio.Group>
						</div>
					</div>
				</div>

				<NextQuestionButton getNextQuestion={this.getNextQuestion} />

				<div style={{ position: "absolute", bottom: "0px", width: "100%" }}>
					<SectionBar numSection={2} />
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

export default connect(mapStateToProps, mapDispatchToProps)(TrackingTheme);
