import { Button, Divider, Typography, Row, Col } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const { Title, Text, Paragraph } = Typography;

class Section4 extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: -1,
		};
	}
	render() {
		return (
			<div className="main-context-div" style={{ fontSize: this.props.fontSize }}>
				<Title level={3} align="left">
					SECTION 4: BREAKING WORDS
				</Title>
				<Divider />
				<div>
					<ul>
						<li style={{ fontSize: this.props.fontSize }}>
							<Text className = "text_div" style={{ color: "black" }}>First, read the word before the sentence.</Text>
						</li>
						<li style={{ fontSize: this.props.fontSize }}>
							<Text className = "text_div" style={{ color: "black" }}>
								You need to change this word into a different form to complete the sentence.
							</Text>
						</li>
						<li style={{ fontSize: this.props.fontSize }}>
							<Text className = "text_div" style={{ color: "black" }}>
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
					<Row style={{ margin: "20px" }}>
						<Col span={4} offset={2}>
							<Text strong style={{ color: "black" }}>
								driver
							</Text>
						</Col>
						<Col>
							<Text strong style={{ color: "black" }}>
								Children are too young to{" "}
							</Text>
							<input onChange={this.onChange} />
							{"."}
						</Col>
					</Row>
					<Row style={{ margin: "20px" }}>
						<Col span={4} offset={2}>
							<Text strong style={{ color: "black" }}>
								improvement
							</Text>
						</Col>
						<Col>
							<Text strong style={{ color: "black" }}>
								My teacher wants my spelling to{" "}
							</Text>
							<input onChange={this.onChange} />
							{"."}
						</Col>
					</Row>
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
