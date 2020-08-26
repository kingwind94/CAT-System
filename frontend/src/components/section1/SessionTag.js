import React, { Component } from "react";
import { Divider, Card, Radio, Button, Row, Col, Typography } from "antd";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import "../style/SessionTag.css";
import { TwoPictures } from "./Utils";

const { Title, Text } = Typography;

class SessionTag extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: -1,
			blank: "_______",
			radioColor: ["black", "black", "black", "black"],
			showElem: "none",
		};
	}

	onChange = (e) => {
		let choice = ["but", "then", "so", "also"];
		this.setState({
			value: e.target.value,
			blank: choice[e.target.value],
		});

		let newRadioColor = ["black", "black", "black", "black"];
		newRadioColor[e.target.value] = "green";
		this.setState({ radioColor: newRadioColor });
	};

	render() {
		let choice = ["but", "then", "so", "also"];
		let questionText1 = "Kate wears sneakers, ";
		let questionText2 = " Jim wears sandals.";
		let picture1 = require("../../Site/Images/ConnectingIdeaExamplePic1.jpg");
		let picture2 = require("../../Site/Images/ConnectingIdeaExamplePic2.jpg");
		let audio = "../../Site/audio/Task_1_Connecting_Ideas_Directions.mp3";

		return (
			<Card style={{ padding: "30px", fontSize: this.props.fontSize }}>
				<Title level={3} align="left">
					SECTION 1: CONNECTING IDEAS
				</Title>
				<Divider />
				<div>
					<ul>
						<li>
							<Text style={{ color: "black" }}>First, read the sentences.</Text>
						</li>
						<li>
							<Text style={{ color: "black" }}>Then, click the option that best complete the sentences.</Text>
						</li>
						<li>
							<Text style={{ color: "black" }}>Some sentences have pictures, others do not.</Text>
						</li>
					</ul>
				</div>

				<div>
					<Title level={4} align="left">
						SAMPLE ITEM
					</Title>
					<Divider />
					<TwoPictures picture1={picture1} picture2={picture2} />
				</div>

				<div style={{ marginTop: "20px" }}>
					<Row>
						<Col span={2}></Col>
						<Col span={20}>
							<Text strong style={{ color: "black" }}>
								{questionText1}
							</Text>
							<Text underline strong style={{ color: "green" }}>
								{this.state.blank}
							</Text>
							<Text strong style={{ color: "black" }}>
								{questionText2}
							</Text>

							<div style={{ margin: "15px" }}>
								<Radio.Group onChange={this.onChange} size="large" value={this.state.value}>
									<Radio
										style={{
											color: this.state.radioColor[0],
											fontSize: this.props.fontSize,
										}}
										value={0}
									>
										{choice[0]}
									</Radio>
									<Radio
										style={{
											color: this.state.radioColor[1],
											fontSize: this.props.fontSize,
										}}
										value={1}
									>
										{choice[1]}
									</Radio>
									<Radio
										style={{
											color: this.state.radioColor[2],
											fontSize: this.props.fontSize,
										}}
										value={2}
									>
										{choice[2]}
									</Radio>
									<Radio
										style={{
											color: this.state.radioColor[3],
											fontSize: this.props.fontSize,
										}}
										value={3}
									>
										{choice[3]}
									</Radio>
								</Radio.Group>
							</div>

							<div style={{ marginTop: "20px", float: "right" }}>
								<Button danger style={{ color: "green", borderColor: "green" }}>
									<Link to="/section1_1">Next</Link>
								</Button>
							</div>
						</Col>
					</Row>
				</div>
			</Card>
		);
	}
}

const mapStateToProps = (state) => {
	// console.log(state);
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

export default connect(mapStateToProps, mapDispatchToProps)(SessionTag);
