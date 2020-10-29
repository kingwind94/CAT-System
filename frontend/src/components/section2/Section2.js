import { Button, Divider, Radio, Typography } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Pic from "../../play.png";
import ReactAudioPlayer from "react-audio-player";

const { Title, Text, Paragraph } = Typography;

class Section2 extends Component {
	constructor(props) {
		super();

		this.state = {
			value: -1,
			radioColor: ["black", "black", "black"],
			showElem: "none",
		};
	}

	onChange = (e) => {
		this.setState({
			value: e.target.value,
		});
	};

	playAudio = () => {
		this.setState({
			showElem: "inline",
		});
	};

	render() {
		const choice = ["water", "heats", "land"];
		const audio = "../../Site/audio/Task_2_Tracking_themes_Directions.mp3";

		return (
			<div className="main-context-div" style={{ fontSize: this.props.fontSize }}>
				<div className="section">
					<Title level={3} align="left">
						SECTION 2: TRACKING THEMES
					</Title>
					<Divider />
					<div>
						<ul>
							<li>
								<Text style={{ color: "black" }}>
									First, read the text and pay attention to the underlined word or words.
								</Text>
							</li>
							<li>
								<Text style={{ color: "black" }}>
									Then, click the option that refers to the same person, thing or event as the
									underlined word or words in the text.
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
					<div style={{ marginBottom: "5px", height: "50px" }}>
						<img onClick={this.playAudio} src={Pic} height="54px" width="54px" alt="img" />
						<ReactAudioPlayer
							style={{ display: this.state.showElem, verticalAlign: "middle" }}
							src={audio}
							controls
						></ReactAudioPlayer>
					</div>
					<div
						style={{
							fontSize: "large",
							backgroundColor: "lightgray",
							width: "100%",
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

					<div style={{ marginTop: "40px" }}>
						<Paragraph style={{ color: "black" }}>In the text above,</Paragraph>
						<Paragraph underline strong style={{ color: "black", textAlign: "center", fontSize: "large" }}>
							It
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
								<Link to="/section2_1">Next</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		fontSize: state.fontSize,
	};
};

export default connect(mapStateToProps)(Section2);
