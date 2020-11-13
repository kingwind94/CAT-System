import { Button, Col, Divider, Radio, Row, Typography, notification } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Pic from "../../play.png";
import ReactAudioPlayer from "react-audio-player";
import { NextQuestionButton } from "../utils/Utils";

const { Title, Text, Paragraph } = Typography;

const openNotification = () => {
	notification.open({
		message: "You should select an option to go next.",
		duration: 2.5,
	});
};

class Section8 extends Component {
	constructor(props) {
		super();
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
		this.props.history.push("/section8_1");
	};

	render() {
		const img1 = require("../../Site/section8_images/meta_example.png");
		const bubble = require("../../Site/section8_images/meta_speechbubble.png");
		const audio = "../../Site/audio/Task_8_Understanding_Responses_Directions.mp3";
		const paper = require("../../Site/section8_images/meta_newspaper.png");

		const radioStyle = {
			display: "block",
			height: "30px",
			lineHeight: "30px",
			color: "black",
		};

		return (
			<div className="main-context-div" style={{ fontSize: this.props.fontSize }}>
				<div className="section">
					<Title level={3} align="left">
						SECTION 8: UNDERSTANDING RESPONSES
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

					{this.state.sampleItem === 1 ? (
						<div className="green-text">
							<Text style={{ color: "black" }}>
								In this section, you will read students’ reactions to an idea from a newspaper article.
								Different students have different reactions to the newspaper’s idea. For example some
								agree, others disagree or question this idea. Your job to describe what students are
								saying or writing.
							</Text>
						</div>
					) : (
						<div>
							<div>
								<ul>
									<li>
										<Text style={{ color: "black" }}>
											First, read or listen the newspaper’s idea.
										</Text>
									</li>
									<li>
										<Text style={{ color: "black" }}>
											Then, read or listen to each student’s sentence.
										</Text>
									</li>
									<li>
										<Text style={{ color: "black" }}>
											Finally, choose the option that best describes what each student is saying
											or writing.
										</Text>
									</li>
								</ul>
							</div>
							<div style={{ marginTop: "20px" }}>
								<Title level={4} align="left">
									SAMPLE ITEM
								</Title>
								<Divider style={{ margin: "10px" }} />
								<Row>
									<div
										style={{
											color: "black",
											backgroundImage: `url(${paper})`,
											backgroundSize: "100% 100%",
											padding: "40px",
										}}
									>
										<Paragraph strong>Newspaper:</Paragraph>
										<Paragraph>Students need recess to play and relax at school.</Paragraph>
									</div>
								</Row>
								<Row>
									<Col span={2} offset={0}>
										<img src={img1} height="80px" alt="img" />
									</Col>
									<div>
										<Paragraph strong style={{ color: "black" }}>
											Peter said:
										</Paragraph>

										<div
											style={{
												color: "black",
												backgroundImage: `url(${bubble})`,
												backgroundSize: "100% 100%",
												padding: "20px",
												paddingLeft: "65px",
											}}
										>
											Yes, at recess we play games like tag, soccer or basketball.
										</div>

										<Paragraph strong style={{ color: "black" }}>
											In the sentence above, Peter is giving ...
										</Paragraph>

										<Radio.Group onChange={this.onChange} value={this.state.value}>
											<Radio style={radioStyle} value={1}>
												excuses
											</Radio>
											<Radio style={radioStyle} value={2}>
												examples
											</Radio>
											<Radio style={radioStyle} value={3}>
												definitions
											</Radio>
											<Radio style={radioStyle} value={4}>
												exaggerations
											</Radio>
										</Radio.Group>
									</div>
								</Row>
							</div>
						</div>
					)}
				</div>

				{this.state.sampleItem === 1 ? (
					<div style={{ position: "absolute", bottom: "50px", right: "80px" }}>
						<Button
							danger
							style={{ color: "green", borderColor: "green" }}
							onClick={() => {
								this.setState({ sampleItem: 2 });
							}}
						>
							Next
						</Button>
					</div>
				) : (
					// <Button danger style={{ color: "green", borderColor: "green" }}>
					// 	<Link to="/section8_1">Next</Link>
					// </Button>
					<NextQuestionButton getNextQuestion={this.onClickNext} />
				)}
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

export default connect(mapStateToProps, mapDispatchToProps)(Section8);
