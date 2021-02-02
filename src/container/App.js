import React from "react";
import QRcode from "qrcode.react";
import "./App.scss";

function App() {
  return (
    <>
      <div className="App">
        <p>Scan the QRcode to read your name.</p>
        <QRcode value="Jordan Devaney" />
      </div>
    </>
  );
}

export default App;
