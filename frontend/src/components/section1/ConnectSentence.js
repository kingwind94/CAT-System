import React, { Component } from "react";
import { Card, Typography, notification, Radio } from "antd";
import { connect } from "react-redux";
import { compose } from "redux";
import ReactAudioPlayer from "react-audio-player";
import { withRouter } from "react-router";

import "./Style.css";
import Pic from "../../play.png";
import FetchData from "../../FetchData";

const { Text } = Typography;

class ConnectSentence extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bodyText: "",
			blank: "________________",
			optionTexts: [],
			selectOption: -1,
			question: "Connect_sent_however",
			curAnswer: "",
			radioColor: ["black", "black", "black"],
			showElem: "none",
		};
	}

	onChange = (e) => {
		var choice = eval("this.props.curState." + String(this.state.question) + ".choice");

		this.setState({
			selectOption: e.target.value,
			curAnswer: e.target.value,
			blank: choice[e.target.value],
		});

		const newRadioColor = ["black", "black", "black"];
		newRadioColor[e.target.value] = "green";
		this.setState({ radioColor: newRadioColor });
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
		let audio = eval("this.props.curState." + String(this.state.question) + ".audio");

		return (
			<div style={{ marginTop: "10%" }}>
				<div className="connect_sentence">
					<div style={{ marginBottom: "5px", height: "50px" }}>
						<img onClick={this.playAudio} src={Pic} height="54px" width="54px" />
						<ReactAudioPlayer style={{ display: this.state.showElem, verticalAlign: "middle" }} src={audio} controls></ReactAudioPlayer>
					</div>
					<div style={{ fontSize: this.props.curState.fontSize, margin: "10px" }}>
						<Text style={{ color: "black" }}>{questionText1}</Text>
						<Text strong style={{ color: "black" }}>
							{questionText2}
						</Text>
						<Text underline style={{ color: "green" }}>
							{this.state.blank}
						</Text>
					</div>
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
