import { Col, Divider, Row, Typography } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import "../style/UniformStyle.css";
import { NextButton } from "../utils/Utils";
import { SectionBar, NextQuestionButton } from "../utils/Utils";

const { Title, Text, Paragraph } = Typography;

class UnderstandingResponses extends Component {
	constructor(props) {
		super();
		this.state = {
			value: -1,
		};
	}
	render() {
		return (
			<div className="main-context-div " style={{ fontSize: this.props.fontSize }}>
				<div>
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
                
				<NextQuestionButton getNextQuestion={this.getNextQuestion} />
				<div style={{ position: "absolute", bottom: "0px", width: "100%" }}>
					<SectionBar numSection={8} />
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

export default connect(mapStateToProps, mapDispatchToProps)(UnderstandingResponses);
