import React, { Component } from "react";

import { BrowserRouter, Route, Switch, Link, withRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { Layout, Menu, Breadcrumb } from "antd";
import { Divider } from "antd";

import SessionTag from "./components/section1/SessionTag";
import Answer from "./components/section1/Answer";
import LoginComponent from "./components/auth/LoginPage";
import ConnectSentence from "./components/section1/ConnectSentence";
import Section2 from "./components/section2/Section2";
import Section3 from "./components/section3/Section3";
import DragAndDrop from "./components/section3/DragAndDrop";
// import DragAndSwap from "./components/section3/DragAndSwap";
import store from "./store";

const { Header, Content, Footer } = Layout;

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<div id="root-container">
						<Layout className="layout" style={{ minHeight: "50vh", minWidth: "800px" }}>
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
							<Content style={{ padding: "25px 200px" }}>
								<div>
									<Route path="/login" render={() => <LoginComponent />}></Route>
									<Route
										path="/"
										exact
										render={() => (
											<div className="site-layout-content">
												<SessionTag />
												<Divider />
												<Answer />
											</div>
										)}
									></Route>
									<Route
										path="/section1_2"
										render={() => (
											<div className="site-layout-content">
												<ConnectSentence />
											</div>
										)}
									></Route>
									<Route
										path="/section2"
										render={() => (
											<div className="site-layout-content">
												<Section2 />
											</div>
										)}
									></Route>
									<Route
										path="/section3"
										render={() => (
											<div className="site-layout-content">
												<Section3 />
											</div>
										)}
									></Route>
									<Route
										path="/section3DAD"
										render={() => (
											<div className="site-layout-content">
												<DragAndDrop />
											</div>
										)}
									></Route>
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
			</Provider>
		);
	}
}

export default App;
