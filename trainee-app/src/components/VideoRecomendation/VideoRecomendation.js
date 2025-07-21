import { useRef, useEffect } from "react";
import React from "react";
import "./VideoRecomendation.css";

const VideoRecomendation = () => {
   return (
    <div id="container">
      <slider-scroll
        id="videoSlider"
        class="slider-scroll sliderBody"
      >
        <div class="slide">
          <img src="./Images/video1.png" alt="video" />
          <span class="timeCard">8:00</span>
          <div>
            <h3>Baby Monitor Technology</h3>
            <div class="meta">
              <span class="dateAndViews">123k views</span>

              <span>Dollier Blair</span>
            </div>
          </div>
        </div>
        <div class="slide">
          <img src="./Images/video5.png" alt="video" />
          <span class="timeCard">8:00</span>
          <div>
            <h3>A Good Autoresponder</h3>
            <div class="meta">
              <span class="dateAndViews">123k views</span>

              <span>Dollier Blair</span>
            </div>
          </div>
        </div>
        <div class="slide">
          <img src="./Images/video1.png" alt="video" />
          <span class="timeCard">8:00</span>
          <div>
            <h3>Selecting The Right Hotel</h3>
            <div class="meta">
              <span class="dateAndViews">123k views</span>

              <span>Dollier Blair</span>
            </div>
          </div>
        </div>
        <div class="slide">
          <img src="./Images/video2.png" alt="video" />
          <span class="timeCard">6:40</span>
          <div>
            <h3>Telescopes 101</h3>
            <div class="meta">
              <span class="dateAndViews">123k views</span>

              <span>Dollier Blair</span>
            </div>
          </div>
        </div>
        <div class="slide">
          <img src="./Images/video3.png" alt="video" />
          <span class="timeCard">1:45</span>
          <div>
            <h3>Medical Care Is Just</h3>
            <div class="meta">
              <span class="dateAndViews">123k views</span>

              <span>Dollier Blair</span>
            </div>
          </div>
        </div>
        <div class="slide">
          <img src="./Images/video.png" alt="video" />
          <span class="timeCard">1:45</span>
          <div>
            <h3>Moon Gazing</h3>
            <div class="meta">
              <div class="dateAndViews">
                <span>67k views</span>
                <span>&middot;</span>
                <span>4 months ago</span>
              </div>
              <span>Dollier Blair</span>
            </div>
          </div>
        </div>
        <div class="slide">
          <img src="./Images/video1.png" alt="video" />
          <span class="timeCard">9:13</span>
          <h3>A Brief History Of Creation</h3>
          <div class="meta">
            <span class="dateAndViews">123k views</span>

            <span>Dollier Blair</span>
          </div>
        </div>
        <div class="slide">
          <img src="./Images/video5.png" alt="video" />
          <span class="timeCard">9:13</span>
          <div>
            <h3>Selecting The Right Hotel</h3>
            <div class="meta">
              <span class="dateAndViews">123k views</span>

              <span>Dollier Blair</span>
            </div>
          </div>
        </div>
        <div class="slide">
          <img src="./Images/video1.png" alt="video" />
          <span class="timeCard">9:13</span>
          <div>
            <h3>Asteroids</h3>
            <div class="meta">
              <span class="dateAndViews">123k views</span>

              <span>Dollier Blair</span>
            </div>
          </div>
        </div>
      </slider-scroll>
    </div>
  );
};

export default VideoRecomendation;
