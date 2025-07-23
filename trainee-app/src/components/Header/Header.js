import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logoBlock">
        <img id="humbMenu" src="./Images/Menu.png" alt="burger" />
        <img
          id="YouTubeLogo"
          src="./Images/YouTubeLogo.png"
          alt="logo YouTube"
        />
        <input placeholder="Search" type="text" />        
      </div>

      <span>
        <div>
          <img src="./Images/combined-Shape.png" alt="Video" />
          <img src="./Images/combinedShape.png" alt="Menu" />
          <img src="./Images/bell.png" alt="notification" />
        </div>

        <img id="channelIcon" src="./Images/Userpic.png" alt="channelIcon" />
      </span>
      <img id="search" src="./Images/Search.png"/>
      <button id="information"><img src="./Images/Information.png"/></button>
    </div>
  );
};

export default Header;
