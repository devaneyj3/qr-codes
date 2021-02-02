import React from "react";
import { Link } from "react-router-dom";
import QRcode from "qrcode.react";
import Navigation from "../components/navigation/navigation";
import Footer from "../components/footer/footer";
import "./App.scss";

function App() {
  return (
    <>
      <Navigation />
      <div className="App">
        <p>Scan the QRcode to read your name.</p>
        <QRcode value="Jordan Devaney" />
      </div>
      <Footer />
    </>
  );
}

export default App;
