import React from "react";
import "./VideoDescription.css";

const VideoDescription = () => {
  return (
    <div className="videoDescription">
      <img src="./Images/channelCard.png" alt="channel icon" />

      <div className="channelNameBlock">
        <h3>Food & Drink</h3>
        <span>Published on 14 Jun 2019</span>
        <span id="subscribed">245K subscribed</span>
        <p>
          A successful marketing plan relies heavily on the pulling-power of
          advertising copy. Writing result-oriented ad copy is difficult, as it
          must appeal to, entice, and convince consumers to take action. There
          is no magic formula to write perfect ad copy; it is based on a number
          of factors, including ad placement, demographic, even the consumer’s
          mood when they see your ad.
        </p>
        <a>Show more</a>
      </div>

      <button id="subscribeButton">Subscribe</button>
      <button>Subscribe 2.3m</button>
      
    </div>
  );
};

export default VideoDescription;
