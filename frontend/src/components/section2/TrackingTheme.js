import React, { Component } from "react";
import { Card, Typography, Radio, Button } from "antd";
import { connect } from "react-redux";
import { Divider } from "antd";
import { Link } from "react-router-dom";

import { SectionBar } from "../utils/Utils";
import "./Style.css";

const { Title, Text, Paragraph } = Typography;

class TrackingTheme extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: -1,
			radioColor: ["black", "black", "black"],
		};
	}

	render() {
		const choice = ["These materials", "huge quantities", "gases and ash"];
		return (
			<div className="tracking_themes">
				<div style={{ position: "absolute", top: "10%", width: "100%" }}>
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
							Major volcanic eruptions release huge quantities of gases and ash into the air.
						</Paragraph>
						<Text underline strong style={{ color: "green" }}>
							These materials
						</Text>
						<Text strong style={{ color: "black" }}>
							{" "}
							can stay in the upper atmosphere for months or years.
						</Text>
					</div>

					<div style={{ marginLeft: "5%", marginTop: "40px" }}>
						<Paragraph style={{ color: "black" }}>In the text above,</Paragraph>
						<Paragraph underline strong style={{ color: "black", textAlign: "center", fontSize: "large" }}>
							These materials
						</Paragraph>
						<Paragraph strong style={{ color: "black", textAlign: "center", fontSize: "large" }}>
							refers to:
						</Paragraph>
						<div
							style={{ margin: "40px", display: "flex", justifyContent: "center", alignItems: "center" }}
						>
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
								<Link to="/section3">Next</Link>
							</Button>
						</div>
					</div>
				</div>

				<div style={{ position: "absolute", bottom: "0px", width: "100%" }}>
					<SectionBar numSection={2} />
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

export default connect(mapStateToProps, mapDispatchToProps)(TrackingTheme);
