import { Col, Divider, Row, Typography, Button, Radio } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { SectionBar, NextQuestionButton } from "../utils/Utils";

const { Title, Text, Paragraph } = Typography;

class UnderstandingResponses extends Component {
	constructor(props) {
		super();
		this.state = {
			value: -1,
			question: "meta_disagreeing",
		};
	}

	onChange = (e) => {
		this.setState({
			value: e.target.value,
		});
	};

	render() {
		const newspaper = this.props.curState[this.state.question].newspaper;
		const news = this.props.curState[this.state.question].news;
		const people = this.props.curState[this.state.question].people;
		const idea = this.props.curState[this.state.question].idea;
		const ask = this.props.curState[this.state.question].ask;
		const img = require("../../Site/section8_images/" + this.props.curState[this.state.question].img);
		const options = this.props.curState[this.state.question].options;
		const answer = this.props.curState[this.state.question].answer;

		const bubble = require("../../Site/section8_images/meta_speechbubble.png");
		const paper = require("../../Site/section8_images/meta_newspaper.png");

		const radioStyle = {
			display: "block",
			height: "30px",
			lineHeight: "30px",
			color: "black",
		};

		return (
			<div className="main-context-div " style={{ fontSize: this.props.fontSize }}>
				<div className="understanding_responses">
					<Row>
						<div style={{
									color: "black",
									backgroundImage: `url(${paper})`,
									backgroundSize: "100% 100%",
									padding: "40px",

								}}>
							<Paragraph strong>{newspaper}</Paragraph>
							<Paragraph>{news}</Paragraph>
						</div>
					</Row>
					<Row>
						<Col span={2} offset={0}>
							<img src={img} height="80px" alt="img" />
						</Col>
						<div>
							<Paragraph strong>{people}</Paragraph>
							<div
								style={{
									color: "black",
									backgroundImage: `url(${bubble})`,
									backgroundSize: "100% 100%",
									padding: "20px",
									paddingLeft: "100px",
								}}
							>
								{idea}
							</div>
							<Paragraph>{ask}</Paragraph>

							<Radio.Group onChange={this.onChange} value={this.state.value}>
								{options.map((option, index) => (
									<Radio style={radioStyle} key={index} value={index + 1}>
										{option}
									</Radio>
								))}
							</Radio.Group>
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
		fontSize: state.fontSize,
		curState: state.METALINGUISTIC,
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
