import React, { Component } from "react";
import { Card, Typography } from "antd";
import { connect } from "react-redux";
import { Divider } from "antd";

import "../style/SessionTag.css";

const { Title, Text } = Typography;

class SessionTag extends Component {
	fetchQuestion = async () => {
		// const url = (path) => ``;
		// const response = await fetch(url("/nextQuestion"));
	};

	render() {
		if (this.props.sessionNum === 0) {
			return (
				<Card style={{ height: 225 }}>
					<Title level={3} align="left">
						SECTION 1: CONNECTING IDEAS
					</Title>
					<Divider />
					<ul>
						<li style={{ fontSize: this.props.fontSize }}>
							<Text>First, read the sentences.</Text>
						</li>
						<li style={{ fontSize: this.props.fontSize }}>
							<Text>Then, click the option that best complete the sentences.</Text>
						</li>
						<li style={{ fontSize: this.props.fontSize }}>
							<Text>Some sentences have pictures, others do not.</Text>
						</li>
					</ul>
				</Card>
			);
		} else {
			return <div></div>;
		}
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
