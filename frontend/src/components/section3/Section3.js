import { Divider, Typography } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { NextButton } from "../utils/Utils";
import Pic from "../../play.png";
import ReactAudioPlayer from "react-audio-player";

const { Title, Text, Paragraph } = Typography;

class Section3 extends Component {
	constructor(props) {
		super();

		this.state = {
			showElem: "none",
		};
	}

	playAudio = () => {
		this.setState({
			showElem: "inline",
		});
	};

	render() {
		const audio = "../../Site/audio/Task_3_Organizing_Texts_Directions.mp3";

		return (
			<div className="main-context-div" style={{ fontSize: this.props.fontSize }}>
				<div className="section">
					<Title level={3} align="left">
						SECTION 3: ORGANIZING TEXT
					</Title>
					<Divider />
					<div className="green-text">
						<Paragraph style={{ color: "black" }}>Can you help Jim fix his essays?</Paragraph>
						<Paragraph style={{ color: "black" }}>
							Jim needs your help! All the sentences in his essay got out of order. Can you reorder his
							essays?
						</Paragraph>
					</div>

					<div style={{ marginTop: "40px" }}>
						<ul>
							<li>
								<Text style={{ color: "black" }}>First, read the sentences.</Text>
							</li>
							<li>
								<Text style={{ color: "black" }}>Then, drag and drop to reorder the sentences into an organized essay.</Text>
							</li>
							<li>
								<Text style={{ color: "black" }}>Complete the first essay and then move to the next essay.</Text>
							</li>
							<li>
								<Text style={{ color: "black" }}>Some essays have 4 sentences, others have 5 or 6 sentences.</Text>
							</li>
							<li>
								<Text strong style={{ color: "black" }}>There is no sample item for this section.</Text>
							</li>
						</ul>
					</div>
					<div style={{ marginBottom: "5px", height: "50px" }}>
						<img onClick={this.playAudio} src={Pic} height="54px" width="54px" alt="img" />
						<ReactAudioPlayer
							style={{ display: this.state.showElem, verticalAlign: "middle" }}
							src={audio}
							controls
						></ReactAudioPlayer>
					</div>
				</div>

				<NextButton link="/section3_1" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Section3);
