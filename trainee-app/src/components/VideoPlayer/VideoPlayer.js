import React from "react";
import "./VideoPlayer.css";

const VideoPlayer = () => {
  return (
    <div className="videoPlayer">
      <div className="video">
        <img src="./Images/Video.png" alt="Video" />
        <div className="videoControllers">
          <div className="time">
            <span>1:34</span>
            <span>19:00</span>
          </div>
          <div class="progress-fill"></div>
          <div className="videoActions">
            <div>
              <img src="./Images/Pause.png" alt="Video" />
              <img src="./Images/Next.png" alt="Video" />
              <img src="./Images/Volume.png" alt="Video" />
              <img src="./Images/Rectangle.png" alt="Video" />
            </div>
            <div>
              <img src="./Images/Subtitles.png" alt="Video" />
              <img src="./Images/Settings.png" alt="Video" />
              <img src="./Images/Size.png" alt="Video" />
              <img src="./Images/Full Screen.png" alt="Video" />
            </div>
          </div>
        </div>
        <div class="player">
          <button class="control-btn">
            <img src="./Images/Pause.png" alt="pause"/>
          </button>
          <span class="current-time">1:34</span>
          <div class="progress-fill"></div>
          <span class="duration">-10:00</span>
          <button class="volume-btn">
            <img src="./Images/Volume.png" alt="volume"/>
          </button>
        </div>
      </div>

      <div>
        <h2>Dude You Re Getting A Telescope</h2>
        <span id="views">123k views</span>
        <div className="videoGrade">
          <span>123k views</span>
          <div className="videoMeta">
            <div>
              <button>
                <img src="./Images/like.png" alt="Like" />
                123k
              </button>
              <button>
                <img src="./Images/dislike.png" alt="Dislike" />
                435k
              </button>
              <button>
                <img src="./Images/arrow.png" alt="Share" />
                Share
              </button>
            </div>

            <button class="dots-button">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default VideoPlayer;
