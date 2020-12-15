import { Button, Col, Divider, Radio, Row, Typography, notification } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Pic from "../../play.png";
import ReactAudioPlayer from "react-audio-player";
import { NextQuestionButton } from "../utils/Utils";

const { Title, Text } = Typography;

const openNotification = () => {
	notification.open({
		message: "You should select an option to go next.",
		duration: 2.5,
	});
};

class Section7 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: -1,
			sampleItem: 1,
			showElem: "none",
		};
	}

	onChange = (e) => {
		this.setState({
			value: e.target.value,
		});
	};

	playAudio = () => {
		this.setState({
			showElem: "inline",
		});
	};

	onClickNext = (e) => {
		e.preventDefault();
		if (this.state.value === -1) {
			openNotification();
			return;
		}
		this.props.history.push("/section7_1");
	};

	render() {
		const img1 = require("../../Site/Images/sure_or_unsure_ex1.png");
		const img2 = require("../../Site/Images/sure_or_unsure_ex2.png");
		const bubble = require("../../Site/section8_images/meta_speechbubble.png");
		const audio = "../../Site/audio/Task_7_Sure_or_Unsure_Directions.mp3";

		return (
			<div className="main-context-div" style={{ fontSize: this.props.fontSize }}>
				<div className="section">
					<Title level={3} align="left">
						SECTION 7: SURE OR UNSURE
					</Title>
					<Divider style={{ margin: "10px" }} />
					<div>
						<ul>
							<li>
								<Text style={{ color: "black" }}>First, read the situation in the green box.</Text>
							</li>
							<li>
								<Text style={{ color: "black" }}>
									Then, read what each person says and decide how sure the person is abut what they
									say.
								</Text>
							</li>
							<li>
								<Text style={{ color: "black" }}>Finally, click the appropriate box.</Text>
							</li>
						</ul>
					</div>

					<div style={{ marginTop: "20px" }}>
						<Title level={4} align="left">
							SAMPLE ITEM {this.state.sampleItem}
						</Title>
						<Text strong style={{ color: "black" }}>
							There is a quiz tomorrow: Sure or Unsure?
						</Text>
						<span style={{ marginBottom: "5px", height: "50px" }}>
							<img onClick={this.playAudio} src={Pic} height="54px" width="54px" alt="img" />
							<ReactAudioPlayer
								style={{ display: this.state.showElem, verticalAlign: "middle" }}
								src={audio}
								controls
							></ReactAudioPlayer>
						</span>
						<Divider style={{ margin: "10px" }} />
					</div>

					<div className="green-text">
						<Text style={{ color: "black" }}>
							A group of friends is trying to figure out if they will have a quiz tomorrow. Some friends
							are very sure there will be a quiz and some friends have doubts.
						</Text>
					</div>

					{this.state.sampleItem === 1 ? (
						<div>
							<Text style={{ color: "black" }}> Friend 1 thinks:</Text>
							<Row>
								<Col span={2} offset={0}>
									<img src={img1} height="50px" alt="img" />
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
										Yes, there will be a quiz tomorrow.
									</div>
								</Col>
							</Row>
						</div>
					) : (
						<div>
							<Text style={{ color: "black" }}> Friend 2 thinks:</Text>
							<Row>
								<Col span={2} offset={0}>
									<img src={img2} height="50px" alt="img" />
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
										We will for sure not have a quiz tomorrow.
									</div>
								</Col>
							</Row>
						</div>
					)}

					<div style={{ marginTop: "20px" }}>
						<Text style={{ color: "black" }}>
							For Friend {this.state.sampleItem}, will there be a quiz tomorrow?
						</Text>
					</div>

					<div style={{ margin: "40px", display: "flex", justifyContent: "center", alignItems: "center" }}>
						<Radio.Group onChange={this.onChange} value={this.state.value}>
							<Radio value={1} style={{ color: "black" }}>
								YES
							</Radio>
							<Radio value={2} style={{ color: "black", fontSize: this.props.fontSize }}>
								maybe YES
							</Radio>
							<Radio value={3} style={{ color: "black", fontSize: this.props.fontSize }}>
								maybe NO
							</Radio>
							<Radio value={4} style={{ color: "black", fontSize: this.props.fontSize }}>
								NO
							</Radio>
						</Radio.Group>
					</div>
				</div>

				{this.state.sampleItem === 1 ? (
					<div style={{ position: "absolute", bottom: "50px", right: "80px" }}>
						<Button
							danger
							style={{ color: "green", borderColor: "green" }}
							onClick={() => {
								if (this.state.value === -1) {
									openNotification();
									return;
								}
								this.setState({ sampleItem: 2, value: -1 });
							}}
						>
							Next
						</Button>
					</div>
				) : (
					<NextQuestionButton getNextQuestion={this.onClickNext} />
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		fontSize: state.fontSize,
	};
};

export default connect(mapStateToProps)(Section7);
