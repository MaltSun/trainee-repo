import { useEffect, useState } from "react";
import React from "react";
import "./VideoRecomendation.css";

const VideoRecomendation = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("./Data/VideoRecomendationData.json")
      .then((res) => res.json())
      .then((data) => setVideos(data));
  }, []);

  return (
    <div id="container">
      <div className="slider-scroll sliderBody" id="videoSlider">
        {videos.map((video, index) => (
          <div className="slide" key={index}>
            <img src={video.thumbnail} alt="video" />
            <span className="timeCard">{video.duration}</span>
            <div>
              <h3>{video.title}</h3>
              <div className="meta">
                <span className="dateAndViews">{video.views}</span>
                <span>{video.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoRecomendation;
