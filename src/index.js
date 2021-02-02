import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { HashRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import ReactToPdf from "react-to-pdf";
import Footer from "./components/footer/footer";
import Home from "./container/App";
import Prices from "./pages/prices";
import Tweets from "./components/tweets/tweets";

const Container = () => {
  const ref = React.createRef();
  return (
    <>
      <Router>
        <div className="container" ref={ref}>
          <Navigation />
          <section className="header">
            <p>Scan the QRcode on the page to get cool information.</p>
            <ReactToPdf targetRef={ref} filename="info.pdf">
              {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
            </ReactToPdf>
          </section>
          <Route exact path="/" component={Home} />
          <Route exact path="/bitcoin" component={Prices} />
          <Route exact path="/tweets" component={Tweets} />
          <Footer />
        </div>
      </Router>
    </>
  );
};

ReactDOM.render(<Container />, document.getElementById("root"));
