import { Button, Divider, Typography, Col, Row, Radio } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { SectionBar, NextQuestionButton } from "../utils/Utils";

const { Title, Text, Paragraph } = Typography;

class SureOrUnsure extends Component {
	constructor(props) {
		super();
		this.state = {
			value: -1,
		};
	}

	onChange = (e) => {
		this.setState({
			value: e.target.value,
			partName: "",
			question: "epis_impossible",
		});
	};

	render() {
		const img1 = require("../../Site/Images/sure_or_unsure_ex1.png");
		const img2 = require("../../Site/Images/sure_or_unsure_ex2.png");
		// const questionText1 = this.props.curState[this.state.question].text1;
		// const keyword = this.props.curState[this.state.question].keyword;
		// const audio = this.props.curState[this.state.question].audio;

		return (
			<div className="main-context-div" style={{ fontSize: this.props.fontSize }}>
				<div className="sure_or_unsure">
					<Title level={4} align="left">
						SECTION 8: UNDERSTANDING RESPONSES
					</Title>
					<Divider />
					<div className="green-text">
						<Text>
							A group of friends is trying to figure out if they will have a quiz tomorrow. Some friends
							are very sure there will be a quiz and some friends have doubts.
						</Text>
					</div>

					<div style={{ marginTop: "40px" }}>
						<Text style={{ color: "black" }}>Friend 1 thinks:</Text>
						<Row>
							<Col span={2} offset={0}>
								<img src={img1} height="50px" alt="img" />
							</Col>
							<Col>
								<Text> Yes, there will be a quiz tomorrow.</Text>
							</Col>
						</Row>
					</div>

					<div style={{ marginTop: "20px" }}>
						<Text>For Friend {this.state.sampleItem}, will there be a quiz tomorrow?</Text>
					</div>

					<div style={{ margin: "40px", display: "flex", justifyContent: "center", alignItems: "center" }}>
						<Radio.Group onChange={this.onChange} value={this.state.value} size="large">
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
		curState: state.EPISTEMIC_MARKERS,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		dispatch1: () => {
			dispatch();
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SureOrUnsure);
