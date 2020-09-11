import React from "react";
import { Row, Col } from "antd";
import "../../index.css";

export function TwoPictures(props) {
	return (
		<Row justify="space-around" gutter={[16, 24]}>
			<Col span={10}>
				<img
					src={props.picture1}
					width="100%"
					height="360px"
					style={{
						position: "relative",
						left: "50%",
						top: "50%",
						transform: "translate(-50%, -50%)",
						maxHeight: "500px",
						maxWidth: "500px",
					}}
				/>
			</Col>
			<Col span={10}>
				<img
					src={props.picture2}
					width="100%"
					height="360px"
					style={{
						position: "relative",
						left: "50%",
						top: "50%",
						transform: "translate(-50%, -50%)",
						maxHeight: "500px",
						maxWidth: "500px",
					}}
				/>
			</Col>
		</Row>
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
					// backgroundColor: "grey",
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
