import React from "react";

import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <a
        href="https://www.github.com/devaneyj3"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHib
      </a>
      <a
        href="https://www.linkedin.com/in/jordandevaney/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Linkedin
      </a>
      <a href="mailto:jordandevaney28@gmail.com">Email</a>
      <a
        href="https://docs.google.com/document/d/1s6z0l5ZkmVUJUtrztj5EwSZvry8BQm2dFyws4GhKzw0/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
    </footer>
  );
};

export default Footer;
