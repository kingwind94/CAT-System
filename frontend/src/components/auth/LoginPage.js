import { Form, Input, Button, InputNumber, Select, Radio } from "antd";
import React, { Component } from "react";
import { Typography } from "antd";
import { Row, Col } from "antd";

const { Option } = Select;
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

	// const onFinishFailed = (errorInfo) => {
	// 	console.log("Failed:", errorInfo);
	// };

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
			<Form {...layout} name="nest-messages" onFinish={onFinish}>
				<Form.Item name={["user", "date"]} label="Date" rules={[{ type: "number", min: 0, max: 99 }]}>
					<InputNumber />
				</Form.Item>

				{/* <Row>
          <Col span={18}>
            <Form.Item name={['user', 'firstname']} label="First Name" rules={[{ required: true }]}>
                <Input style={{width:160}}/>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name={['user', 'lastname']} label="Last Name" rules={[{ required: true }]}>
                <Input style={{width:160}}/>
            </Form.Item>
          </Col>
      </Row> */}

				<Form.Item name={["user", "firstname"]} label="First Name" rules={[{ required: true }]}>
					<Input style={{ width: 160 }} />
				</Form.Item>
				<Form.Item name={["user", "lastname"]} label="Last Name" rules={[{ required: true }]}>
					<Input style={{ width: 160 }} />
				</Form.Item>
				<Form.Item name={["user", "school"]} label="School" rules={[{ required: true }]}>
					<Input style={{ width: 160 }} />
				</Form.Item>

				<Form.Item name={["user", "grade"]} label="Grade" rules={[{ type: "number", min: 1, max: 6 }]}>
					<InputNumber />
				</Form.Item>
				<Form.Item name={["user", "teacher"]} label="Your homeroom teacher's name" rules={[{}]}>
					<Input style={{ width: 700 }} />
				</Form.Item>
				<Form.Item name={["user", "roomNum"]} label="Your homeroom number" rules={[{ type: "number", min: 0, max: 99 }]}>
					<InputNumber />
				</Form.Item>
				<Form.Item name={["user", "schoolID"]} label="Your school ID number" rules={[{ type: "number", min: 0, max: 6 }]}>
					<InputNumber />
				</Form.Item>
				<Form.Item label="Gender" name="size">
					<Radio.Group>
						<Radio.Button value="small">Male</Radio.Button>
						<Radio.Button value="middle">Female</Radio.Button>
					</Radio.Group>
				</Form.Item>

				<Form.Item name={["user", "language"]} label="Your primary language (the language you speak the most)">
					<Input style={{ width: 300 }} />
				</Form.Item>
				<Form.Item name="ethnicity" label="Ethnicity (you can choose more than one)" rules={[{ required: true }]}>
					<Select
						placeholder="Select a option"
						// onChange={this.onGenderChange}
						allowClear
					>
						<Option value="male">White / Caucasian</Option>
						<Option value="female">Black / African American</Option>
						<Option value="female">Hispanic / Latino</Option>
						<Option value="female">Asian</Option>
						<Option value="female">American Indian or Alaska native</Option>
						{/* <Option value="other">other</Option> */}
					</Select>
					<Input placeholder="If you choose other, please fill in" />
				</Form.Item>
				<Form.Item name={["user", "homeLanguageY"]} label="What language(s) do you speak at home">
					<Input />
				</Form.Item>
				<Form.Item name={["user", "homeLanguageP"]} label="What language(s) do people in your home speak?">
					<Input />
				</Form.Item>
				{/* <Form.Item name={['user', 'introduction']} label="Introduction">
        <Input.TextArea />
      </Form.Item> */}
				<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 17 }}>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
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
