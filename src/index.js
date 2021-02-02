import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { HashRouter as Router, Route } from "react-router-dom";

import Home from "./container/App";
import Prices from "./pages/prices";
import Tweets from "./components/tweets/tweets";

ReactDOM.render(
  <Router>
    <div className="container">
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/bitcoin" component={Prices} />
        <Route exact path="/tweets" component={Tweets} />
      </main>
    </div>
  </Router>,
  document.getElementById("root")
);
