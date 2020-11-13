import { FontColorsOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter} from "react-router-dom";


import PageSwitch from "./PageSwitch";

const { Content } = Layout;

class App extends Component {

	render() {
		return (
			<BrowserRouter>
				<div id="root-container">
					<Layout style={{ height: "100%", width: "100%", }}>
						<Content style={{ height: "100%", margin: "10px auto", backgroundColor: "white" }}>
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

								<PageSwitch />

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
