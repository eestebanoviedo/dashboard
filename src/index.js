import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Dashboard from "./Dashboard.js";
import ResponsiveDrawer from "./DashboardStatic.js";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <ResponsiveDrawer />
  </React.StrictMode>,
  document.getElementById("root")
);
