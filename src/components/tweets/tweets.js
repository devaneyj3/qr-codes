import React, { useState } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import "./tweets.scss";

const Tweets = () => {
  const [profiles, setProfiles] = useState(["BBCAfrica", "Ethereum"]);
  return (
    <section className="tweets">
      {profiles.map((profile) => {
        return (
          <>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName={profile}
              options={{ height: 400, width: 400 }}
            />
          </>
        );
      })}
    </section>
  );
};

export default Tweets;
