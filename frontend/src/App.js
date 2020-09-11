import React, { Component } from "react";

import { BrowserRouter, Route, Switch, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { Layout, Menu, Breadcrumb } from "antd";
import { FontColorsOutlined } from "@ant-design/icons";

import Section1 from "./components/section1/Section1";
import ConnectPicture from "./components/section1/ConnectPicture";
import LoginComponent from "./components/auth/LoginPage";
import ConnectSentence from "./components/section1/ConnectSentence";
import Section2 from "./components/section2/Section2";
import TrackingTheme from "./components/section2/TrackingTheme";
import Section3 from "./components/section3/Section3";
import DragAndDrop from "./components/section3/DragAndDrop";
import DragAndSwap from "./components/section3/DragAndSwap";
import Section4 from "./components/section4/Section4";
import BreakingWords from "./components/section4/BreakingWords";

const { Header, Content, Footer } = Layout;

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div id="root-container">
					<Layout className="layout" style={{ minHeight: "100vh" }}>

						<Content style={{ margin: "25px auto" }}>
							<div className="site-layout-content">
								<div style={{ height: "20px" }}>
									<FontColorsOutlined
										style={{ fontSize: "28px", color: "black" }}
										onClick={() => this.props.fontSizeDispatch("large")}
									/>
									<FontColorsOutlined
										style={{ fontSize: "20px", color: "black" }}
										onClick={() => this.props.fontSizeDispatch("medium")}
									/>
								</div>
								<Route path="/login" component={LoginComponent}></Route>
								<Route exact path="/" component={Section1}></Route>
								<Route path="/section1_1" component={ConnectPicture}></Route>
								<Route path="/section1_2" component={ConnectSentence}></Route>
								<Route path="/section2" component={Section2}></Route>
								<Route path="/section2_1" component={TrackingTheme}></Route>
								<Route path="/section3" component={Section3}></Route>
								<Route path="/section3DAD" component={DragAndSwap}></Route>
								<Route path="/section4" component={Section4}></Route>
								<Route path="/section4_1" component={BreakingWords}></Route>
							</div>
						</Content>
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
