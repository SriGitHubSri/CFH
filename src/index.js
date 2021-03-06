import React from "react";
import ReactDOM from "react-dom";
import App from "./journey/journey";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import "./styles/_base.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import history from "../src/component/history";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
