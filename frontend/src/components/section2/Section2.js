import React, { Component } from "react";
import { Card, Typography, Radio, Button } from "antd";
import { connect } from "react-redux";
import { Divider } from "antd";
import { Link } from "react-router-dom";

import "../style/UniformStyle.css";

const { Title, Text, Paragraph } = Typography;

class Section2 extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: -1,
			radioColor: ["black", "black", "black"],
		};
	}
	render() {
		const choice = ["water", "heats", "land"];

		return (
			<div style={{ padding: "30px", fontSize: this.props.fontSize }}>
				<Title level={3} align="left">
					SECTION 2: TRACKING THEMES
				</Title>
				<Divider />
				<div>
					<ul>
						<li style={{ fontSize: this.props.fontSize }}>
							<Text style={{ color: "black" }}>
								First, read the text and pay attention to the underlined word or words.
							</Text>
						</li>
						<li style={{ fontSize: this.props.fontSize }}>
							<Text style={{ color: "black" }}>
								Then, click the option that refers to the same person, thing or event as the underlined
								word or words in the text.
							</Text>
						</li>
					</ul>
				</div>
				<div style={{ marginTop: "40px" }}>
					<Title level={4} align="left">
						SAMPLE ITEM
					</Title>
					<Divider />
				</div>
				<div
					style={{
						fontSize: "large",
						marginLeft: "5%",
						backgroundColor: "lightgray",
						width: "90%",
						height: "100px",
						padding: "15px",
					}}
				>
					<Paragraph strong style={{ color: "black" }}>
						Water heats up more slowly than land.
					</Paragraph>
					<Text underline strong style={{ color: "green" }}>
						It
					</Text>
					<Text strong style={{ color: "black" }}>
						{" "}
						also cools down more slowly than land.
					</Text>
				</div>

				<div style={{ marginLeft: "5%", marginTop: "40px" }}>
					<Paragraph style={{ color: "black" }}>In the text above,</Paragraph>
					<Paragraph underline strong style={{ color: "black", textAlign: "center", fontSize: "large" }}>
						It
					</Paragraph>
					<Paragraph strong style={{ color: "black", textAlign: "center", fontSize: "large" }}>
						refers to:
					</Paragraph>
					<div style={{ margin: "40px", display: "flex", justifyContent: "center", alignItems: "center" }}>
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
						</Radio.Group>
					</div>
					<div style={{ marginTop: "20px", float: "right" }}>
						<Button danger style={{ color: "green", borderColor: "green" }}>
							<Link to="/section2_1">Next</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Section2);
