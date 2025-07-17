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
          <img src="./Images/Combined-Shape.png" alt="Video" />
          <img src="./Images/Combined Shape.png" alt="Menu" />
          <img src="./Images/ui-11.png" alt="notification" />
        </div>

        <img id="channelIcon" src="./Images/Userpic.png" alt="channelIcon" />
      </span>
    </div>
  );
};

export default Header;
