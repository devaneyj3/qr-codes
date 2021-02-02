import React from "react";
import { Link } from "react-router-dom";
import QRCode from "react-qr-code";
import "./App.scss";

function App() {
  return (
    <>
      <Link to="/bitcoin">Bitcoin Prices</Link>
      <div className="App">
        <p>Scan the QRcode to read your name.</p>
        <QRCode value="Jordan Devaney" />
      </div>
    </>
  );
}

export default App;
