import { Col, Divider, Radio, Row, Typography, notification } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { NextQuestionButton, SectionBar } from "../utils/Utils";
import FetchData from "../utils/FetchData";
import Pic from "../../play.png";
import ReactAudioPlayer from "react-audio-player";

const { Title, Text } = Typography;

const openNotification = () => {
	notification.open({
		message: "You should select an option to go next.",
		duration: 2.5,
	});
};

class SureOrUnsure extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectOption: -1,
			question: "epis_impossible",
			showElem: "none",
		};
	}

	playAudio = () => {
		this.setState({
			showElem: "inline",
		});
	};

	onChange = (e) => {
		this.setState({
			selectOption: e.target.value,
		});
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
		await FetchData("/UpdateCATAnswer/32", "PUT", catAns).then((res) => res.json());

		let judgeOfAnswer;
		const correctAns = this.props.curState.EPISTEMIC_MARKERS[this.state.question].answer;

		if (correctAns === this.state.selectOption) {
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
			sectionName: "EPISTEMIC_MARKERS",
			numQuestions: this.props.curState.numQuestions,
		};

		this.setState({
			selectOption: -1,
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
					this.props.history.push("/section8");
				} else {
					this.setState({ question: res.nextQuestion.toLowerCase() });
				}
			});
	};

	render() {
		const img1 = require("../../Site/Images/" + this.props.curState.EPISTEMIC_MARKERS[this.state.question].img);
		const questionText0 = this.props.curState.EPISTEMIC_MARKERS[this.state.question].text0;
		const questionText1 = this.props.curState.EPISTEMIC_MARKERS[this.state.question].text1;
		const questionText2 = this.props.curState.EPISTEMIC_MARKERS[this.state.question].text2;
		const audio = this.props.curState.EPISTEMIC_MARKERS[this.state.question].audio;
		const description = this.props.curState.EPISTEMIC_MARKERS[this.state.question].description;
		const curDescription = this.props.curState.EPISTEMIC_MARKERS[description];
		const bubble = require("../../Site/section8_images/meta_speechbubble.png");

		return (
			<div className="main-context-div" style={{ fontSize: this.props.fontSize }}>
				<div className="sure_or_unsure">
					<Title level={3} align="left">
						{curDescription.title1}
					</Title>
					<Divider style={{ margin: "10px" }} />
					<div className="green-text">
						<Title level={4} align="left">
							{curDescription.title2}
						</Title>
						<Text>{curDescription.text1}</Text>
					</div>

					<div style={{ marginTop: "40px" }}>
						<Text style={{ color: "black" }}>{questionText0}</Text>
						<span style={{ marginBottom: "5px", height: "50px" }}>
							<img onClick={this.playAudio} src={Pic} height="54px" width="54px" alt="img" />
							<ReactAudioPlayer
								style={{ display: this.state.showElem, verticalAlign: "middle" }}
								src={audio}
								controls
							></ReactAudioPlayer>
						</span>
						<Row>
							<Col span={2} offset={0}>
								<img src={img1} height="80px" alt="img" />
							</Col>

							<Col>
								<div
									style={{
										color: "black",
										backgroundImage: `url(${bubble})`,
										backgroundSize: "100% 100%",
										padding: "20px",
										paddingLeft: "50px",
									}}
								>
									{questionText1}
								</div>
							</Col>
						</Row>
					</div>

					<div style={{ marginTop: "20px" }}>
						<Text>{questionText2}</Text>
					</div>

					<div style={{ margin: "40px", display: "flex", justifyContent: "center", alignItems: "center" }}>
						<Radio.Group onChange={this.onChange} value={this.state.selectOption}>
							<Radio value={1}>Yes</Radio>
							<Radio value={2}>maybe YES</Radio>
							<Radio value={3}>maybe NO</Radio>
							<Radio value={4}>NO</Radio>
						</Radio.Group>
					</div>
				</div>

				<NextQuestionButton getNextQuestion={this.getNextQuestion} />

				<div style={{ position: "absolute", bottom: "0px", width: "100%" }}>
					<SectionBar numSection={7} />
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

export default connect(mapStateToProps, mapDispatchToProps)(SureOrUnsure);
