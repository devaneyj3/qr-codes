import React from "react";
import { Link } from "react-router-dom";
import QRcode from "qrcode.react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>Scan the QRcode to read your name.</p>
      <QRcode value="Jordan Devaney" />
    </div>
  );
}

export default App;
