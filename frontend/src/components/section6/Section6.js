import { Button, Divider, Typography } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../style/UniformStyle.css";

const { Title, Text, Paragraph } = Typography;

class Section6 extends Component {
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
					SECTION 6: IDENTIFYING DEFINITIONS
				</Title>
				<Divider />
				<Paragraph>Maria is writing a dictionary for adults.</Paragraph>
				<Paragraph>
					She has written many definitions, but she does not know which definition to include in a dictionary
					for adults. She needs your help!
				</Paragraph>
				<div>
					<ul>
						<li style={{ fontSize: this.props.fontSize }}>
							<Text style={{ color: "black" }}>
								First, read each definition and decide if it was written for children or adults.
							</Text>
						</li>
						<li style={{ fontSize: this.props.fontSize }}>
							<Text style={{ color: "black" }}>
								If you think the definition is for children, then click “children”; OR if you think the
								definition is for adults, then click “adults”.
							</Text>
						</li>
						<li style={{ fontSize: this.props.fontSize }}>
							<Text style={{ color: "black" }}>
								Finally, from the three definitions choose the option that is best for a dictionary for
								adults.
							</Text>
						</li>
						<li style={{ fontSize: this.props.fontSize }}>
							<Text style={{ color: "black" }}>Click only one option: A, B or C.</Text>
						</li>
						<li style={{ fontSize: this.props.fontSize }}>
							<Text style={{ color: "black" }}>There is no sample item for this section.</Text>
						</li>
					</ul>
				</div>

				<div style={{ marginLeft: "5%", marginTop: "40px" }}>
					<div style={{ marginTop: "20px", float: "right" }}>
						<Button danger style={{ color: "green", borderColor: "green" }}>
							<Link to="/section6_1">Next</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Section6);
