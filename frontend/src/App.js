import { FontColorsOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import LoginComponent from "./components/auth/LoginPage";
import ConnectPicture from "./components/section1/ConnectPicture";
import ConnectSentence from "./components/section1/ConnectSentence";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";
import TrackingTheme from "./components/section2/TrackingTheme";
import DragAndSwap from "./components/section3/DragAndSwap";
import Section3 from "./components/section3/Section3";
import BreakingWords from "./components/section4/BreakingWords";
import Section4 from "./components/section4/Section4";
import ComprehendingSentences from "./components/section5/ComprehendingSentences";
import Section5 from "./components/section5/Section5";
import IdentifyingDefinitions from "./components/section6/IdentifyingDefinitions";
import Section6 from "./components/section6/Section6";
import Section7 from "./components/section7/Section7";
import SureOrUnsure from "./components/section7/SureOrUnsure";
import Section8 from "./components/section8/Section8";
import UnderstandingResponses from "./components/section8/UnderstandingResponses";

const { Content } = Layout;

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div id="root-container">
					<Layout className="layout" style={{ minHeight: "100vh" }}>
						<Content style={{ margin: "50px auto" }}>
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
								<Route path="/section5" component={Section5}></Route>
								<Route path="/section5_1" component={ComprehendingSentences}></Route>
								<Route path="/section6" component={Section6}></Route>
								<Route path="/section6_1" component={IdentifyingDefinitions}></Route>
								<Route path="/section7" component={Section7}></Route>
								<Route path="/section7_1" component={SureOrUnsure}></Route>
								<Route path="/section8" component={Section8}></Route>
								<Route path="/section8_1" component={UnderstandingResponses}></Route>
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
