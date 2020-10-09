import { Button, Divider, Typography, Col, Row, Radio } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


const { Title, Text, Paragraph } = Typography;

class Section7 extends Component {
	constructor(props) {
		super();
		this.state = {
			value: -1,
			sampleItem: 1,
		};
	}

	onChange = (e) => {
		this.setState({
			value: e.target.value,
		});
	};

	render() {
		const img1 = require("../../Site/Images/sure_or_unsure_ex1.png");
		const img2 = require("../../Site/Images/sure_or_unsure_ex2.png");

		return (
			<div className="main-context-div" style={{ fontSize: this.props.fontSize }}>
				<Title level={3} align="left">
					SECTION 7: SURE OR UNSURE
				</Title>
				<Divider />
				<div>
					<ul>
						<li style={{ fontSize: this.props.fontSize }}>
							<Text className = "text_div" style={{ color: "black" }}>First, read the situation in the green box.</Text>
						</li>
						<li style={{ fontSize: this.props.fontSize }}>
							<Text className = "text_div" style={{ color: "black" }}>
								Then, read what each person says and decide how sure the person is abut what they say.
							</Text>
						</li>
						<li style={{ fontSize: this.props.fontSize }}>
							<Text className = "text_div" style={{ color: "black" }}>Finally, click the appropriate box.</Text>
						</li>
					</ul>
				</div>

				<div style={{ marginTop: "40px" }}>
					<Title level={4} align="left">
						SAMPLE ITEM {this.state.sampleItem}
					</Title>
					<Text>There is a quiz tomorrow: Sure or Unsure?</Text>
					<Divider />
				</div>

				<div className="green-text">
					<Text>
						A group of friends is trying to figure out if they will have a quiz tomorrow. Some friends are
						very sure there will be a quiz and some friends have doubts.
					</Text>
				</div>

				{this.state.sampleItem === 1 ? (
					<div>
						Friend 1 thinks:
						<Row>
							<Col span={2} offset={1}>
								<img src={img1} height="50px" alt="img" />
							</Col>
							<Col>
								<Text> Yes, there will be a quiz tomorrow.</Text>
							</Col>
						</Row>
					</div>
				) : (
					<div>
						Friend 2 thinks:
						<Row>
							<Col span={2} offset={1}>
								<img src={img2} height="50px" alt="img" />
							</Col>
							<Col>
								<Text> We will for sure not have a quiz tomorrow.</Text>
							</Col>
						</Row>
					</div>
				)}

				<div>
					<Text>For Friend {this.state.sampleItem}, will there be a quiz tomorrow?</Text>
				</div>

				<div style={{ margin: "40px", display: "flex", justifyContent: "center", alignItems: "center" }}>
					<Radio.Group onChange={this.onChange} value={this.state.value} size="large">
						<Radio value={1}>Yes</Radio>
						<Radio value={2}>maybe YES</Radio>
						<Radio value={3}>maybe NO</Radio>
						<Radio value={4}>NO</Radio>
					</Radio.Group>
				</div>

				<div style={{ marginLeft: "5%", marginTop: "40px" }}>
					<div style={{ marginTop: "20px", float: "right" }}>
						{this.state.sampleItem === 1 ? (
							<Button
								danger
								style={{ color: "green", borderColor: "green" }}
								onClick={() => {
									this.setState({ sampleItem: 2 });
								}}
							>
								Next
							</Button>
						) : (
							<Button danger style={{ color: "green", borderColor: "green" }}>
								<Link to="/section7_1">Next</Link>
							</Button>
						)}
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

export default connect(mapStateToProps, mapDispatchToProps)(Section7);
