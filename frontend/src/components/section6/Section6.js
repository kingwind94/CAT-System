import { Divider, Typography } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { NextButton } from "../utils/Utils";
import Pic from "../../play.png";
import ReactAudioPlayer from "react-audio-player";

const { Title, Text, Paragraph } = Typography;

class Section6 extends Component {
	constructor(props) {
		super();
		this.state = {
			value: -1,
			showElem: "none",
		};
	}

	playAudio = () => {
		this.setState({
			showElem: "inline",
		});
	};

	render() {
		const audio = "../../Site/audio/Task_6_Identifying_Definitions_Directions.mp3";

		return (
			<div className="main-context-div" style={{ fontSize: this.props.fontSize }}>
				<div className="section">
					<Title level={3} align="left">
						SECTION 6: IDENTIFYING DEFINITIONS
					</Title>
					<Divider />
					<div className="green-text">
						<Paragraph style={{ color: "black" }}>Maria is writing a dictionary for adults.</Paragraph>
						<Paragraph style={{ color: "black" }}>
							She has written many definitions, but she does not know which definition to include in a
							dictionary for adults. She needs your help!
						</Paragraph>
					</div>

					<div style={{ marginTop: "40px" }}>
						<ul>
							<li>
								<Text style={{ color: "black" }}>
									First, read each definition and decide if it was written for children or adults.
								</Text>
							</li>
							<li>
								<Text style={{ color: "black" }}>
									If you think the definition is for children, then click “children”; OR if you think
									the definition is for adults, then click “adults”.
								</Text>
							</li>
							<li>
								<Text style={{ color: "black" }}>
									Finally, from the three definitions choose the option that is best for a dictionary
									for adults.
								</Text>
							</li>
							<li>
								<Text style={{ color: "black" }}>Click only one option: A, B or C.</Text>
							</li>
							<li>
								<Text style={{ color: "black" }}>There is no sample item for this section.</Text>
							</li>
						</ul>
					</div>
					<div style={{ marginBottom: "5px", height: "50px" }}>
						<img onClick={this.playAudio} src={Pic} height="54px" width="54px" alt="img" />
						<ReactAudioPlayer
							style={{ display: this.state.showElem, verticalAlign: "middle" }}
							src={audio}
							controls
						></ReactAudioPlayer>
					</div>
				</div>
				<NextButton link="/section6_1" />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		fontSize: state.fontSize,
	};
};

export default connect(mapStateToProps)(Section6);
