import React, { useState, useEffect } from "react";
import axios from "axios";
import QRCode from "react-qr-code";
import "./prices.scss";

const About = () => {
  const [cryptos, setCryptos] = useState([]);
  const refresh = () => {
    window.location.reload();
  };
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=xtz,ada,burst&tsyms=USD&api_key=${process.env.KEY}`
      );
      setCryptos(data.data.RAW);
    };
    getData();
  }, []);
  return (
    <>
      <p>Scan QR code to get the price.</p>
      <button onClick={refresh}>Refresh Price</button>
      <div className="bitcoin-info-container">
        {Object.keys(cryptos).map((key) => {
          let price = cryptos[key].USD.PRICE;
          price = "$" + String(price.toFixed(3));
          return (
            <section className={key} key={key}>
              <h2>{key} Price</h2>
              <QRCode value={price} size={70} />
            </section>
          );
        })}
      </div>
    </>
  );
};

export default About;
