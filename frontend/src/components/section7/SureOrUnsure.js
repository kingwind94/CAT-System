import { Button, Divider, Typography, Col, Row, Radio } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../style/UniformStyle.css";

const { Title, Text, Paragraph } = Typography;

class SureOrUnsure extends Component {
	constructor(props) {
		super();
		this.state = {
			value: -1,
			sampleItem: 1,
		};
	}

	onChange = (e) => {
		this.setState({
			value: e.target.value,
		});
	};

	render() {
		const img1 = require("../../Site/Images/sure_or_unsure_ex1.png");
		const img2 = require("../../Site/Images/sure_or_unsure_ex2.png");

		return (
			<div className="main-context-div" style={{ fontSize: this.props.fontSize }}>
				<div className="green-text">
					<Text>
						A group of friends is trying to figure out if they will have a quiz tomorrow. Some friends are
						very sure there will be a quiz and some friends have doubts.
					</Text>
				</div>

				<div>
					Friend 1 thinks:
					<Row>
						<Col span={2} offset={1}>
							<img src={img1} height="50px" alt="img" />
						</Col>
						<Col>
							<Text> Yes, there will be a quiz tomorrow.</Text>
						</Col>
					</Row>
				</div>

				<div>
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

				<div style={{ marginLeft: "5%", marginTop: "40px" }}>
					<div style={{ marginTop: "20px", float: "right" }}>
						<Button danger style={{ color: "green", borderColor: "green" }}>
							<Link to="/section7_1">Next</Link>
						</Button>
					</div>
				</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SureOrUnsure);
