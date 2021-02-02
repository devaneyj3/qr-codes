import React from "react";
import { Link } from "react-router-dom";

import "./navigation.scss";

const Navigation = () => {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/bitcoin">Bitcoin Prices</Link>
      <Link to="/tweets">Check Out Tweets</Link>
    </header>
  );
};

export default Navigation;
