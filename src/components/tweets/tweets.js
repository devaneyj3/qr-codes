import React from "react";

import { TwitterTimelineEmbed } from "react-twitter-embed";

const Tweets = () => {
  return (
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
  );
};

export default Tweets;
