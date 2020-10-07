import { Button, Divider, Typography } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../style/UniformStyle.css";

const { Title, Text, Paragraph } = Typography;

class Section7 extends Component {
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

				<div style={{ marginLeft: "5%", marginTop: "40px" }}>
					<div style={{ marginTop: "20px", float: "right" }}>
						<Button danger style={{ color: "green", borderColor: "green" }}>
							<Link to="/section7_1">Next</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Section7);
