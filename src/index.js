import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./state/store";

ReactDOM.render(
	<Provider store={store}>
		<HashRouter hashType="slash">
			<App />
		</HashRouter>
	</Provider>,
	document.getElementById("root")
);
