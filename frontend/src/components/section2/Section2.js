import React, { Component } from "react";
import { Card, Typography } from "antd";
import { connect } from "react-redux";
import { Divider } from "antd";

import "../style/SessionTag.css";

const { Title, Text } = Typography;

class Section2 extends Component {
	fetchQuestion = async () => {
		// const url = (path) => ``;
		// const response = await fetch(url("/nextQuestion"));
	};

	render() {
		if (this.props.sessionNum === 0) {
			return (
				<Card style={{ height: 225 }}>
					<Title level={3} align="left">
						SECTION 2: TRACKING THEMES
					</Title>
					<Divider />
					<ul>
						<li style={{ fontSize: this.props.fontSize }}>
							<Text>First, read the text and pay attention to the underlined word or words.</Text>
						</li>
						<li style={{ fontSize: this.props.fontSize }}>
							<Text>Then, click the option that refers to the same person, thing or event as the underlined word or words in the text.</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Section2);
