import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import * as Sentry from "@sentry/browser";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

Sentry.init({
  dsn: "https://34691a7aef334e418d957eba69143097@sentry.io/1727336"
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
