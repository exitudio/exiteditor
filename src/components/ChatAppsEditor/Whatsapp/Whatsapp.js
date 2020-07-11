import React from "react";
import "./Whatsapp.scss";
import profile from "./images/profile.jpg";
import plus from "./images/plus.jpg";
import _image from "./images/image.jpg";
import mic from "./images/mic.jpg";

function Whatsapp() {
  return (
    <div className="whatsapp">
      <div className="background-repeat" />
      <header>
        <div className="arrow-left" />
        <img src={profile} alt="profile" className="profile" />
        <div className="name">Kartua Smith USA</div>
        <div className="icon-right" />
      </header>
      <body></body>
      <footer>
        <img src={plus} alt="plus" className="plus" />
        <div className="text-box"></div>
        <img src={_image} alt="img" className="img" />
        <img src={mic} alt="mic" className="mic" />
      </footer>
    </div>
  );
}

export default Whatsapp;
