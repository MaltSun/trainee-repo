import { useRef, useEffect } from "react";
import React from "react";
import "./VideoRecomendation.css";

const VideoRecomendation = () => {
  // const sliderRef = useRef();

  // useEffect(() => {
  //   const slider = sliderRef.current;
  //   const slideHeight = slider?.firstChild?.offsetHeight || 0;

  //   const interval = setInterval(() => {
  //     if (slider) {
  //       const nextScrollTop = slider.scrollTop + slideHeight;

  //       if (nextScrollTop + slider.clientHeight >= slider.scrollHeight) {
  //         slider.scrollTop = 0;
  //       } else {
  //         slider.scrollTop = nextScrollTop;
  //       }
  //     }
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div id="container">
      <slider-scroll
        // ref={sliderRef}
        id="videoSlider"
        class="slider-scroll sliderBody"
      >
        <div class="slide">
          <img src="./Images/Cover (1).png" alt="" />
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
          <img src="./Images/Cover (5).png" alt="" />
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
          <img src="./Images/Cover (1).png" alt="" />
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
          <img src="./Images/Cover (2).png" alt="" />
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
          <img src="./Images/Cover (3).png" alt="" />
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
          <img src="./Images/Cover (1).png" alt="" />
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
          <img src="./Images/Cover (1).png" alt="" />
          <span class="timeCard">9:13</span>
          <h3>A Brief History Of Creation</h3>
          <div class="meta">
            <span class="dateAndViews">123k views</span>

            <span>Dollier Blair</span>
          </div>
        </div>
        <div class="slide">
          <img src="./Images/Cover (5).png" alt="" />
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
          <img src="./Images/Cover (1).png" alt="" />
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
