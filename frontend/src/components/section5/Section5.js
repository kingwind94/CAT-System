import { Divider, Typography } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { FourPictures, NextButton } from "../utils/Utils";
import Pic from "../../play.png";
import ReactAudioPlayer from "react-audio-player";

const { Title, Text } = Typography;

class Section5 extends Component {
	constructor(props) {
		super();
		this.state = {
			value: -1,
			showElem: "none",
		};
	}

	playAudio = () => {
		this.setState({
			showElem: "inline",
		});
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
						<div style={{ marginBottom: "5px", height: "50px" }}>
							<img onClick={this.playAudio} src={Pic} height="54px" width="54px" alt="img" />
							<ReactAudioPlayer
								style={{ display: this.state.showElem, verticalAlign: "middle" }}
								src={audio}
								controls
							></ReactAudioPlayer>
						</div>
					</div>
					<div>
						<FourPictures picture1={picture1} picture2={picture2} picture3={picture3} picture4={picture4} />
					</div>
				</div>
				<NextButton link="/section5_1" />
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
