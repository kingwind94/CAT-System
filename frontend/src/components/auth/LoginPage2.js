import { Form, Input } from "antd";
import React, { Component } from "react";
import { Typography } from "antd";
import { Row, Col } from "antd";

const { Title } = Typography;

const layout = {
	labelCol: { span: 6 },
	wrapperCol: { span: 12 },
};
// const tailLayout = {
// 	wrapperCol: { offset: 6, span: 12 },
// };

const Demo = () => {
	const onFinish = (values) => {
		console.log("Success:", values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<>
			<Row>
				<Col span={24}>
					<Title level={2} align="center">
						ACADEMIC LANGUAGE ASSESSMENT FORM 1-A
					</Title>
					<Title level={2} align="center">
						STUDENT INFORMATION SHEET
					</Title>
				</Col>
			</Row>
			<Form {...layout} name="basic" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
				<Row>
					<Form.Item style={{ width: "30%" }} label="Date" name="date" rules={[{ required: true, message: "Please input your username!" }]}>
						<Input />
					</Form.Item>
				</Row>

				<Row>
					<Col span={8}>
						<Form.Item label="Username" name="username" rules={[{ required: true, message: "Please input your username!" }]}>
							<Input />
						</Form.Item>
					</Col>
					<Col span={8}>
						<Form.Item label="Password" name="password" rules={[{ required: true, message: "Please input your password!" }]}>
							<Input.Password />
						</Form.Item>
					</Col>
				</Row>
				<Row>
					<Col span={8}>
						<Form.Item label="Username" name="username" rules={[{ required: true, message: "Please input your username!" }]}>
							<Input />
						</Form.Item>
					</Col>
					<Col span={8}>
						<Form.Item label="Password" name="password" rules={[{ required: true, message: "Please input your password!" }]}>
							<Input.Password />
						</Form.Item>
					</Col>
				</Row>
				<Row>
					<Col span={24}>
						<Form.Item
							style={{ width: "80%" }}
							label="Username"
							name="username"
							rules={[{ required: true, message: "Please input your username!" }]}
						>
							<Input />
						</Form.Item>
					</Col>
				</Row>
				<Col span={18}>
					<Form.Item label="Username" name="username" rules={[{ required: true, message: "Please input your username!" }]}>
						<Input />
					</Form.Item>
				</Col>
				<Col span={18}>
					<Form.Item label="Username" name="username" rules={[{ required: true, message: "Please input your username!" }]}>
						<Input />
					</Form.Item>
				</Col>
				<Col span={18}>
					<Form.Item label="Username" name="username" rules={[{ required: true, message: "Please input your username!" }]}>
						<Input />
					</Form.Item>
				</Col>
			</Form>
			<Row>
				<Col span={8}>col-8</Col>
				<Col span={8}>col-8</Col>
				<Col span={8}>col-8</Col>
			</Row>
			<Row>
				<Col span={6}>col-6</Col>
				<Col span={6}>col-6</Col>
				<Col span={6}>col-6</Col>
				<Col span={6}>col-6</Col>
			</Row>
		</>
	);
};

class LoginComponent extends Component {
	render() {
		return <Demo />;
	}
}

// ReactDOM.render(<Demo />, mountNode);
export default LoginComponent;

<Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
	<Select
		placeholder="Select a option and change input text above"
		// onChange={this.onGenderChange}
		allowClear
	>
		<Option value="male">male</Option>
		<Option value="female">female</Option>
		{/* <Option value="other">other</Option> */}
	</Select>
</Form.Item>;
