import { Col, Divider, Row, Typography } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import "../style/UniformStyle.css";
import { NextButton } from "../utils/Utils";


const { Title, Text, Paragraph } = Typography;

class Section8 extends Component {
	constructor(props) {
		super();
		this.state = {
			value: -1,
		};
	}
	render() {
		return (
			<div style={{ padding: "30px", fontSize: this.props.fontSize }}>
				<Title level={3} align="left">
					SECTION 8: UNDERSTANDING RESPONSES
				</Title>
				<Divider />
				<div>
					<ul>
						<li style={{ fontSize: this.props.fontSize }}>
							<Text className = "text_div" style={{ color: "black" }}>First, read or listen the newspaper’s idea.</Text>
						</li>
						<li style={{ fontSize: this.props.fontSize }}>
							<Text className = "text_div" style={{ color: "black" }}>Then, read or listen to each student’s sentence.</Text>
						</li>
						<li style={{ fontSize: this.props.fontSize }}>
							<Text className = "text_div" style={{ color: "black" }}>
								Finally, choose the option that best describes what each student is saying or writing.
							</Text>
						</li>
					</ul>
				</div>
				<div style={{ marginTop: "40px" }}>
					<Title level={4} align="left">
						SAMPLE ITEMS
					</Title>
					<Divider />
					<Row>
						<div>
							<Paragraph strong>Newspaper:</Paragraph>
							<Paragraph>Students need recess to play and relax at school.</Paragraph>
						</div>
					</Row>
					<Row>
						<Col span={2} offset={1}></Col>
						<div>
							<Paragraph strong>Peter said:</Paragraph>
							<Paragraph>Yes, at recess we play games like tag, soccer or basketball.</Paragraph>
						</div>
					</Row>
				</div>
				<NextButton link="/section7_1" />
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
