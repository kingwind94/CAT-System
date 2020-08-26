import React from "react";
import { Row, Col } from "antd";

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
