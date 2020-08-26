import React, { Component } from "react";

import { BrowserRouter, Route, Switch, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { Layout, Menu, Breadcrumb } from "antd";
import { FontColorsOutlined } from "@ant-design/icons";

import SessionTag from "./components/section1/SessionTag";
import Answer from "./components/section1/Answer";
import LoginComponent from "./components/auth/LoginPage";
import ConnectSentence from "./components/section1/ConnectSentence";
import Section2 from "./components/section2/Section2";
import Section3 from "./components/section3/Section3";
import DragAndDrop from "./components/section3/DragAndDrop";
import DragAndSwap from "./components/section3/DragAndSwap";

const { Header, Content, Footer } = Layout;

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div id="root-container">
					<Layout className="layout" >
						<Header>
							<div className="logo" />
							<Menu theme="dark" mode="horizontal">
								<Menu.Item key="1">
									<Link to="/">Section 1</Link>
								</Menu.Item>
								<Menu.Item key="2">
									<Link to="/section2">Section 2</Link>
								</Menu.Item>
								<Menu.Item key="3">
									<Link to="/section3">Section 3</Link>
								</Menu.Item>
							</Menu>
						</Header>
						<Content style={{ margin: "25px auto"}}>
							<div className="site-layout-content" style={{width:"1600px"}}>
								<div style={{ marginBottom: "15px" }}>
									<FontColorsOutlined style={{ fontSize: "28px", color: "black" }} onClick={() => this.props.fontSizeDispatch("large")} />
									<FontColorsOutlined style={{ fontSize: "20px", color: "black" }} onClick={() => this.props.fontSizeDispatch("medium")} />
								</div>
								<Route path="/login" component={LoginComponent}></Route>
								<Route exact path="/" component={SessionTag}></Route>
								<Route path="/section1_1" component={Answer}></Route>
								<Route path="/section1_2" component={ConnectSentence}></Route>
								<Route path="/section2" component={Section2}></Route>
								<Route path="/section3" component={Section3}></Route>
								<Route path="/section3DAD" component={DragAndSwap}></Route>
							</div>

							<Breadcrumb style={{ margin: "16px 0" }}>
								<Breadcrumb.Item>
									<Link to="/login">Login</Link>
								</Breadcrumb.Item>
								<Breadcrumb.Item>Back</Breadcrumb.Item>
								<Breadcrumb.Item>
									<Link to="/">CAT Test</Link>
								</Breadcrumb.Item>
							</Breadcrumb>
						</Content>
						<Footer style={{ textAlign: "center" }}>CAT Test System</Footer>
					</Layout>
				</div>
			</BrowserRouter>
		);
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		fontSizeDispatch(size) {
			const action = {
				type: "update_fontSize",
				value: size,
			};
			dispatch(action);
		},
	};
};

export default connect(null, mapDispatchToProps)(App);
