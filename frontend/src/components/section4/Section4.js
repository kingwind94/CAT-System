import React, { Component } from "react";
import { Card, Typography, Radio, Button } from "antd";
import { connect } from "react-redux";
import { Divider } from "antd";
import { Link } from "react-router-dom";
import { Input } from "antd";

import "../style/UniformStyle.css";

const { Title, Text, Paragraph } = Typography;

class Section4 extends Component {
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
					SECTION 4: BREAKING WORDS
				</Title>
				<Divider />
				<div>
					<ul>
						<li style={{ fontSize: this.props.fontSize }}>
							<Text style={{ color: "black" }}>First, read the word before the sentence.</Text>
						</li>
						<li style={{ fontSize: this.props.fontSize }}>
							<Text style={{ color: "black" }}>
								You need to change this word into a different form to complete the sentence.
							</Text>
						</li>
						<li style={{ fontSize: this.props.fontSize }}>
							<Text style={{ color: "black" }}>
								When you are ready, type changed word inside the green box.
							</Text>
						</li>
					</ul>
				</div>
				<div style={{ marginTop: "40px" }}>
					<Title level={4} align="left">
						SAMPLE ITEMS
					</Title>
					<Divider />
				</div>
				<div>
					<div>
						<Text strong style={{ color: "black", marginRight: "15px" }}>
							driver
						</Text>
						<Text strong style={{ color: "black" }}>
							Children are too young to
						</Text>

						<div>
							<input  onChange={this.onChange} />
						</div>
					</div>
					<div>
						<Text strong style={{ color: "black", marginRight: "15px" }}>
							improvement
						</Text>
						<Text strong style={{ color: "black" }}>
							My teacher wants my spelling to
						</Text>
						<div>
							<input  onChange={this.onChange} />
						</div>
					</div>
				</div>

				<div style={{ marginLeft: "5%", marginTop: "40px" }}>
					<div style={{ marginTop: "20px", float: "right" }}>
						<Button danger style={{ color: "green", borderColor: "green" }}>
							<Link to="/section4_1">Next</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Section4);
