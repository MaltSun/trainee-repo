import React from "react";
import "./VideoPlayer.css";

const VideoPlayer = () => {
  return (
    <div className="videoPlayer">
      <div className="video">
        <img src="./Images/Video.png" alt="Video" />
        {/* <div >
          <div>
            <span>1:34</span>
            <span>19:00</span>
          </div>
          <div >
            <div >
              <div ></div>
            </div>
          </div>
          <div>
            <div>
              <img src="./Images/Video.png" alt="Video" />
              <img src="./Images/Video.png" alt="Video" />
              <img src="./Images/Video.png" alt="Video" />
              <img src="./Images/Video.png" alt="Video" />
            </div>
             <div>
              <img src="./Images/Video.png" alt="Video" />
              <img src="./Images/Video.png" alt="Video" />
              <img src="./Images/Video.png" alt="Video" />
              <img src="./Images/Video.png" alt="Video" />
            </div>
          </div>
        </div> */}
      </div>

      <div>
        <h2>Dude You Re Getting A Telescope</h2>
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
