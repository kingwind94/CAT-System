import React, { Component } from "react";
import { Card, Typography, Button } from "antd";
import { connect } from "react-redux";
import { Divider } from "antd";
import { Link } from "react-router-dom";

import DragAndDrop from "./DragAndDrop";
import "../style/SessionTag.css";

const { Title, Text, Paragraph } = Typography;

class Section3 extends Component {
	render() {
		return (
			<div>
				<Card style={{ height: 400 }}>
					<Typography>
						<Title level={3} align="left">
							SECTION 3: ORGANIZING TEXT
						</Title>
						<Divider />

						<Paragraph style={{ fontSize: "20px" }}>
							<Text mark>Can you help Jim fix his essays?</Text>
						</Paragraph>
						<Paragraph style={{ fontSize: "20px" }}>
							<Text mark>Jim needs your help! All the sentences in his essay got out of order. Can you reorder his essays?</Text>
						</Paragraph>

						<ul>
							<li style={{ fontSize: this.props.fontSize }}>
								<Text>First, read the sentences.</Text>
							</li>
							<li style={{ fontSize: this.props.fontSize }}>
								<Text>Then, drag and drop to reorder the sentences into an organized essay.</Text>
							</li>
							<li style={{ fontSize: this.props.fontSize }}>
								<Text>Complete the first essay and then move to the next essay.</Text>
							</li>
							<li style={{ fontSize: this.props.fontSize }}>
								<Text>Some essays have 4 sentences, others have 5 or 6 sentences.</Text>
							</li>
							<li style={{ fontSize: this.props.fontSize }}>
								<Text strong>There is no sample item for this section.</Text>
							</li>
						</ul>
					</Typography>
					<Button
						size={this.props.fontSize}
						danger
						// onClick={this.getNextQuestion}
						style={{ color: "green", borderColor: "green" }}
					>
						<Link to="/section3DAD">Next</Link>
					</Button>
				</Card>
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
