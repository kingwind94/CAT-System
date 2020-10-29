import { Col, Divider, Row, Typography } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { NextButton } from "../utils/Utils";
import Pic from "../../play.png";
import ReactAudioPlayer from "react-audio-player";

const { Title, Text, Paragraph } = Typography;

class Section4 extends Component {
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
		const audio = "../../Site/audio/Task_4_Breaking_words_Directions.mp3";

		return (
			<div className="main-context-div" style={{ fontSize: this.props.fontSize }}>
				<div className="section">
					<Title level={3}>SECTION 4: BREAKING WORDS</Title>
					<Divider />
					<div>
						<ul>
							<li>
								<Text style={{ color: "black" }}>First, read the word before the sentence.</Text>
							</li>
							<li>
								<Text style={{ color: "black" }}>
									You need to change this word into a different form to complete the sentence.
								</Text>
							</li>
							<li>
								<Text style={{ color: "black" }}>
									When you are ready, type changed word inside the green box.
								</Text>
							</li>
						</ul>
					</div>
					<div style={{ marginTop: "40px" }}>
						<Title level={4}>SAMPLE ITEMS</Title>
						<Divider />
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
						<Row style={{ marginTop: "20px" }}>
							<Col span={4} offset={2}>
								<Text strong style={{ color: "black" }}>
									driver
								</Text>
							</Col>
							<Col>
								<Text strong style={{ color: "black" }}>
									Children are too young to{" "}
								</Text>
								<input onChange={this.onChange} />
							</Col>
						</Row>
						<Row style={{ marginTop: "20px" }}>
							<Col span={4} offset={2}>
								<Text strong style={{ color: "black" }}>
									improvement
								</Text>
							</Col>
							<Col>
								<Text strong style={{ color: "black" }}>
									My teacher wants my spelling to{" "}
								</Text>
								<input onChange={this.onChange} />
							</Col>
						</Row>
					</div>
				</div>
				<NextButton link="/section4_1" />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return {
		fontSize: state.fontSize,
	};
};

export default connect(mapStateToProps)(Section4);
