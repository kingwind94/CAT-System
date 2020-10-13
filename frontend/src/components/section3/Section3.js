import React, { Component } from "react";
import { Card, Typography, Button } from "antd";
import { connect } from "react-redux";
import { Divider } from "antd";
import { Link } from "react-router-dom";
import { NextButton } from "../utils/Utils";

const { Title, Text, Paragraph } = Typography;

class Section3 extends Component {
	render() {
		return (
			<div className="main-context-div" style={{ fontSize: this.props.fontSize }}>
				<div className="section">
					<Title level={3} align="left">
						SECTION 3: ORGANIZING TEXT
					</Title>
					<Divider />
					<div className="green-text">
						<Paragraph>Can you help Jim fix his essays?</Paragraph>
						<Paragraph>
							Jim needs your help! All the sentences in his essay got out of order. Can you reorder his
							essays?
						</Paragraph>
					</div>

					<div style={{ marginTop: "40px" }}>
						<ul>
							<li>
								<Text>First, read the sentences.</Text>
							</li>
							<li>
								<Text>Then, drag and drop to reorder the sentences into an organized essay.</Text>
							</li>
							<li>
								<Text>Complete the first essay and then move to the next essay.</Text>
							</li>
							<li>
								<Text>Some essays have 4 sentences, others have 5 or 6 sentences.</Text>
							</li>
							<li>
								<Text strong>There is no sample item for this section.</Text>
							</li>
						</ul>
					</div>
				</div>

				<NextButton link="/section3DAD" />
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
