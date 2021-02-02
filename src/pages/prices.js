import React from "react";
import { Link } from "react-router-dom";
import QRCode from "react-qr-code";
import "./prices.scss";

const About = () => {
  return (
    <>
      <Link className="App-link" to="/">
        Home
      </Link>
      <div className="bitcoin-info-container">
        <section className="tezos">
          <p>Tezos Price</p>
          <QRCode value="Tezos Price" />
        </section>
        <section className="burst">
          <p>Burst Price</p>
          <QRCode value="Burst Price" />
        </section>
        <section className="cordano">
          <p>Cardano Price</p>
          <QRCode value="Cardano Price" />
        </section>
      </div>
    </>
  );
};

export default About;
