import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "./index.css";

import "antd/dist/antd.css";
import App from "./App";
import store from "./store";

const MyAppWithStore = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

render(<MyAppWithStore />, document.getElementById("root"));
