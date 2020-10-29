import { Col, Radio, Row, Typography, notification } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { NextQuestionButton, SectionBar } from "../utils/Utils";
import FetchData from "../utils/FetchData";
import Pic from "../../play.png";
import ReactAudioPlayer from "react-audio-player";

const { Title, Text, Paragraph } = Typography;

const openNotification = () => {
	notification.open({
		message: "You should choose an option to go next.",
		duration: 2.5,
	});
};

class UnderstandingResponses extends Component {
	constructor(props) {
		super();
		this.state = {
			selectOption: -1,
			question: "meta_disagreeing",
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
		const correctAns = this.props.curState.METALINGUISTIC[this.state.question].answer;

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
			sectionName: "METALINGUISTIC",
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
					this.props.history.push("/");
				} else {
					this.setState({ question: res.nextQuestion.toLowerCase() });
				}
			});
	};

	render() {
		const newspaper = this.props.curState.METALINGUISTIC[this.state.question].newspaper;
		const news = this.props.curState.METALINGUISTIC[this.state.question].news;
		const people = this.props.curState.METALINGUISTIC[this.state.question].people;
		const idea = this.props.curState.METALINGUISTIC[this.state.question].idea;
		const ask = this.props.curState.METALINGUISTIC[this.state.question].ask;
		const img = require("../../Site/section8_images/" +
			this.props.curState.METALINGUISTIC[this.state.question].img);
		const options = this.props.curState.METALINGUISTIC[this.state.question].options;
		const audio = this.props.curState.METALINGUISTIC[this.state.question].audio;

		const bubble = require("../../Site/section8_images/meta_speechbubble.png");
		const paper = require("../../Site/section8_images/meta_newspaper.png");

		const radioStyle = {
			display: "block",
			height: "30px",
			lineHeight: "30px",
			color: "black",
		};

		return (
			<div className="main-context-div " style={{ fontSize: this.props.fontSize }}>
				<div className="understanding_responses">
					<div style={{ marginBottom: "5px", height: "50px" }}>
						<img onClick={this.playAudio} src={Pic} height="54px" width="54px" alt="img" />
						<ReactAudioPlayer
							style={{ display: this.state.showElem, verticalAlign: "middle" }}
							src={audio}
							controls
						></ReactAudioPlayer>
					</div>
					<Row>
						<div
							style={{
								color: "black",
								backgroundImage: `url(${paper})`,
								backgroundSize: "100% 100%",
								padding: "40px",
							}}
						>
							<Paragraph strong>{newspaper}</Paragraph>
							<Paragraph>{news}</Paragraph>
						</div>
					</Row>
					<Row>
						<Col span={2} offset={0}>
							<img src={img} height="80px" alt="img" />
						</Col>
						<div>
							<Paragraph strong>{people}</Paragraph>
							<div
								style={{
									color: "black",
									backgroundImage: `url(${bubble})`,
									backgroundSize: "100% 100%",
									padding: "20px",
									paddingLeft: "100px",
								}}
							>
								{idea}
							</div>
							<Paragraph>{ask}</Paragraph>

							<Radio.Group onChange={this.onChange} value={this.state.selectOption}>
								{options.map((option, index) => (
									<Radio style={radioStyle} key={index} value={index + 1}>
										{option}
									</Radio>
								))}
							</Radio.Group>
						</div>
					</Row>
				</div>

				<NextQuestionButton getNextQuestion={this.getNextQuestion} />
				<div style={{ position: "absolute", bottom: "0px", width: "100%" }}>
					<SectionBar numSection={8} />
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

export default connect(mapStateToProps, mapDispatchToProps)(UnderstandingResponses);
