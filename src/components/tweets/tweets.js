import React from "react";
import Navigation from "../navigation/navigation";
import Footer from "../footer/footer";

import { TwitterTimelineEmbed } from "react-twitter-embed";

const Tweets = () => {
  return (
    <>
      <Navigation />
      <section className="tweets">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="ethereum"
          options={{ height: 400 }}
        />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="BBCAfrica"
          options={{ height: 400 }}
        />
      </section>
      <Footer />
    </>
  );
};

export default Tweets;
