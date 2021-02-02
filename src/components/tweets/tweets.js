import React from "react";

import "./tweets.scss";

const Tweets = () => {
  return (
    <section className="tweets">
      <a
        class="twitter-timeline"
        href="https://twitter.com/ethereum?ref_src=twsrc%5Etfw"
        data-height="400"
        data-width="400"
        data-theme="dark"
      >
        Tweets by ethereum
      </a>
      <a
        class="twitter-timeline"
        href="https://twitter.com/BBCAfrica?ref_src=twsrc%5Etfw"
        data-height="400"
        data-width="400"
        data-theme="dark"
      >
        Tweets by BBCAfrica
      </a>
    </section>
  );
};

export default Tweets;
