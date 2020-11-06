import { Button, Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import Pic from "../../play.png";
import "../../index.css";

export function TwoPictures(props) {
	return (
		<Row justify="space-around" gutter={[16, 24]}>
			<Col span={10}>
				<img
					src={props.picture1}
					width="100%"
					height="260px"
					style={{
						position: "relative",
						left: "50%",
						top: "50%",
						transform: "translate(-50%, -50%)",
						maxHeight: "500px",
						maxWidth: "500px",
					}}
					alt="img"
				/>
			</Col>
			<Col span={10}>
				<img
					src={props.picture2}
					width="100%"
					height="260px"
					style={{
						position: "relative",
						left: "50%",
						top: "50%",
						transform: "translate(-50%, -50%)",
						maxHeight: "500px",
						maxWidth: "500px",
					}}
					alt="img"
				/>
			</Col>
		</Row>
	);
}

export function FourPictures(props) {
	return (
		<div>
			<Row justify="space-around" gutter={[16, 24]}>
				<Col span={10} offset={2}>
					<img height="150px" src={props.picture1} alt="img" />
				</Col>

				<Col span={10}>
					<img height="150px" src={props.picture2} alt="img" />
				</Col>
			</Row>
			<Row justify="space-around" gutter={[16, 24]}>
				<Col span={10} offset={2}>
					<img height="150px" src={props.picture3} alt="img" />
				</Col>

				<Col span={10}>
					<img height="150px" src={props.picture4} alt="img" />
				</Col>
			</Row>
		</div>
	);
}

export function SectionBar(props) {
	const arr = Array.from(Array(props.numSection), (_, i) => i + 1);
	const Section = (idx) => {
		return (
			<div
				className="section-bar"
				key={idx}
				style={{
					height: "32px",
					width: "120px",
					marginRight: "5px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				Section {idx}
			</div>
		);
	};
	return (
		<div
			style={{
				height: "40px",
				borderStyle: "dotted",
				width: "100%",
				marginTop: "60px",
				display: "flex",
				position: "absolute",
				bottom: "0px",
			}}
		>
			{arr.map((idx) => {
				return Section(idx);
			})}
		</div>
	);
}

export function NextButton(props) {
	return (
		<div style={{ position: "absolute", bottom: "50px", right: "80px" }}>
			<Button danger style={{ color: "green", borderColor: "green" }}>
				<Link to={props.link}>Next</Link>
			</Button>
		</div>
	);
}

export function NextQuestionButton(props) {
	return (
		<div style={{ position: "absolute", bottom: "50px", right: "80px" }}>
			<Button
				danger
				onClick={props.getNextQuestion}
				style={{ color: "green", borderColor: "green" }}
			>
				Next
			</Button>
		</div>
	);
}

export function AudioPlayer(props) {
	return (
		<div style={{ marginBottom: "5px", height: "50px" }}>
			<img onClick={this.playAudio} src={Pic} height="54px" width="54px" alt="img" />
			<ReactAudioPlayer
				style={{ display: props.showElem, verticalAlign: "middle" }}
				src={props.audio}
				controls
			></ReactAudioPlayer>
		</div>
	);
}
