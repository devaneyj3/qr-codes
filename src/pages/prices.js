import React, { useState, useEffect } from "react";
import axios from "axios";
import QRCode from "react-qr-code";
import "./prices.scss";

const About = () => {
  const [cryptos, setCryptos] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=xtz,ada,burst&tsyms=USD&api_key=5820c008c1cf507466fd4396627fd2cf90e80fd810d332b6dedff15aa8251bad"
      );
      setCryptos(data.data.RAW);
    };
    getData();
  }, []);
  return (
    <div className="bitcoin-info-container">
      {Object.keys(cryptos).map((key) => {
        let price = cryptos[key].USD.PRICE;
        let image = cryptos[key].USD.IMAGEURL;
        const customImg = {
          src: image,
        };
        console.log(customImg);
        price = "$" + String(price.toFixed(3));
        return (
          <section className={key} key={key}>
            <h2>{key} Price</h2>
            <QRCode
              value={price}
              size={70}
              style={{ src: customImg.src }}
              imageSettings={{
                src: "https://static.zpao.com/favicon.png",
                height: 24,
                width: 24,
              }}
            />
            <p>Price: {price}</p>
          </section>
        );
      })}
    </div>
  );
};

export default About;
