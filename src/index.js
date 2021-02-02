import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { HashRouter as Router, Route } from "react-router-dom";

import Home from "./container/App";
import Prices from "./pages/prices";

ReactDOM.render(
  <Router>
    <div className="container">
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/bitcoin" component={Prices} />
      </main>
    </div>
  </Router>,
  document.getElementById("root")
);
