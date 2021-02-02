import React, { useState, useEffect } from "react";
// import shell from 'electron';
import { Link } from "react-router-dom";
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
      console.log(data.data.RAW);
      setCryptos(data.data.RAW);
    };
    getData();
  }, []);
  return (
    <>
      <Link className="App-link" to="/">
        Home
      </Link>
      <h1>Bitcoin Prices</h1>
      <div className="bitcoin-info-container">
        {Object.keys(cryptos).map((key) => {
          let price = cryptos[key].USD.PRICE;
          let image = cryptos[key].USD.IMAGEURL;
          price = "$" + String(price.toFixed(3));
          return (
            <section className={key}>
              <h2>{key} Price</h2>
              <QRCode
                value={price}
                imageSettings={{
                  'src': image,
                }}
              />
              <p>Price: {price}</p>
            </section>
          );
        })}
      </div>
      <a href="https://www.github.com/devaneyj3" target='_blank' rel="noopener noreferrer">GitHib</a>
      <a href="https://www.linkedin.com/in/jordandevaney/" target='_blank' rel="noopener noreferrer">Linkedin</a>
      <a href="mailto:jordandevaney28@gmail.com">Email</a>
      <a href="https://docs.google.com/document/d/1s6z0l5ZkmVUJUtrztj5EwSZvry8BQm2dFyws4GhKzw0/edit?usp=sharing" target='_blank' rel="noopener noreferrer">
        Resume
      </a>
    </>
  );
};

export default About;
