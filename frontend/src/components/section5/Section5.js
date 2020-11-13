import { Divider, Typography, notification, Row, Col } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { FourPictures, NextQuestionButton } from "../utils/Utils";
import Pic from "../../play.png";
import ReactAudioPlayer from "react-audio-player";

const { Title, Text } = Typography;

const openNotification = () => {
	notification.open({
		message: "You should select an image to go next.",
		duration: 2.5,
	});
};

class Section5 extends Component {
	constructor(props) {
		super();
		this.state = {
			selectOption: -1,
			showElem: "none",
			borderStyle: ["none", "none", "none", "none"],
		};
	}

	playAudio = () => {
		this.setState({
			showElem: "inline",
		});
	};

	onClick = (e, val) => {
		this.setState({ selectOption: val });
		let newBorderStyle = ["none", "none", "none", "none"];
		newBorderStyle[val - 1] = "solid";
		this.setState({ borderStyle: newBorderStyle });
	};

	onClickNext = (e) => {
		e.preventDefault();
		if (this.state.selectOption === -1) {
			openNotification();
			return;
		}
		this.props.history.push("/section5_1");
	};

	render() {
		const picture1 = require("../../Site/Images/Comprehending_S_Example_1.JPG");
		const picture2 = require("../../Site/Images/Comprehending_S_Example_2.JPG");
		const picture3 = require("../../Site/Images/Comprehending_S_Example_3.JPG");
		const picture4 = require("../../Site/Images/Comprehending_S_Example_4.JPG");
		const audio = "../../Site/audio/Task_5_Comprehending_Sentences_Directions.mp3";

		return (
			<div className="main-context-div" style={{ fontSize: this.props.fontSize }}>
				<div className="section">
					<Title level={3} align="left">
						SECTION 5: COMPREHENDING SENTENCES
					</Title>
					<Divider style={{ margin: "10px" }} />
					<div>
						<ul>
							<li>
								<Text style={{ color: "black" }}>
									First, click the PLAY button below to listen to a sentence.
								</Text>
							</li>
							<li>
								<Text style={{ color: "black" }}>You will hear the sentence three times.</Text>
							</li>
							<li>
								<Text style={{ color: "black" }}>
									Then, you need to select the picture that goes with that sentence.
								</Text>
							</li>
						</ul>
					</div>
					<div style={{ marginTop: "20px" }}>
						<Title level={4} align="left">
							SAMPLE ITEMS
						</Title>
						<Divider style={{ margin: "10px" }} />

						{/* <div style={{ marginBottom: "5px", height: "50px" }}>
							<img onClick={this.playAudio} src={Pic} height="54px" width="54px" alt="img" />
							<ReactAudioPlayer
								style={{ display: this.state.showElem, verticalAlign: "middle" }}
								src={audio}
								controls
							></ReactAudioPlayer>
						</div> */}

					</div>
					<div>
						{/* <FourPictures picture1={picture1} picture2={picture2} picture3={picture3} picture4={picture4} /> */}
						<Row justify="space-around" gutter={[16, 24]}>
							<Col span={10} offset={2}>
								<img
									src={picture1}
									onClick={(e) => this.onClick(e, 1)}
									style={{ borderStyle: this.state.borderStyle[0] }}
									alt="img"
									height="150px"
								/>
							</Col>

							<Col span={10}>
								<img
									src={picture2}
									onClick={(e) => this.onClick(e, 2)}
									style={{ borderStyle: this.state.borderStyle[1] }}
									alt="img"
									height="150px"
								/>
							</Col>
						</Row>
						<Row justify="space-around" gutter={[16, 24]}>
							<Col span={10} offset={2}>
								<img
									src={picture3}
									onClick={(e) => this.onClick(e, 3)}
									style={{ borderStyle: this.state.borderStyle[2] }}
									alt="img"
									height="150px"
								/>
							</Col>

							<Col span={10}>
								<img
									src={picture4}
									onClick={(e) => this.onClick(e, 4)}
									style={{ borderStyle: this.state.borderStyle[3] }}
									alt="img"
									height="150px"
								/>
							</Col>
						</Row>
					</div>
				</div>
				{/* <NextButton link="/section5_1" /> */}
				<NextQuestionButton getNextQuestion={this.onClickNext} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return {
		sessionNum: state.sessionNum,
		fontSize: state.fontSize,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		dispatch1: () => {
			dispatch();
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Section5);
