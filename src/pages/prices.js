import React, { useState, useEffect } from "react";
import shell from 'electron';
import { Link } from "react-router-dom";
import axios from "axios";
import QRCode from "react-qr-code";
import "./prices.scss";

const About = () => {
  const [ cryptos, setCryptos ] = useState([])
  useEffect(() => {
    const getData = async() => {
      const data = await axios.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=xtz,ada,burst&tsyms=USD&api_key=5820c008c1cf507466fd4396627fd2cf90e80fd810d332b6dedff15aa8251bad")
      setCryptos(data.data)
    }
    getData()
  }, [])
  return (
    <>
      <Link className="App-link" to="/">
        Home
      </Link>
      <h1>Bitcoin Prices</h1>
      <div className="bitcoin-info-container">
        {Object.keys(cryptos).map(key => {
          let price = cryptos[key].USD
          price = '$' + String(price.toFixed(3))
          return (
<section className={key}>
          <h2>{key} Price</h2>
          <QRCode value={price} />
            <p>Price: {price}</p>
            </section>
          )
        })}
      </div>
      <Link to='https://github.com/devaneyj3'>GitHib</Link>
      <Link to='https://www.linkedin.com/in/jordandevaney/'>Linkedin</Link>
      <a href='mailto:jordandevaney28@gmail.com'>Email</a>
      <Link to='https://docs.google.com/document/d/1s6z0l5ZkmVUJUtrztj5EwSZvry8BQm2dFyws4GhKzw0/edit?usp=sharing'>Resume</Link>
    </>
  );
};

export default About;
