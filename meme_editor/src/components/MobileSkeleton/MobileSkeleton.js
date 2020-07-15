import React from "react";
import "./MobileSkeleton.scss";
import headbarLeft from "./images/head-bar-left.jpg";
import headbarMid from "./images/head-bar-mid.jpg";
import headbarRight from "./images/head-bar-right.jpg";
import ScaleComponent from "../reuseComponents/ScaleComponent";

function MobileSkeleton(props) {
  return (
    <div className="all-mobile">
      <ScaleComponent scale={0.5}>
        <div className="mobile-skeleton ">
          <header>
            <img src={headbarLeft} alt="header-bar-left" />
            <img src={headbarMid} alt="header-bar-mid" />
            <img src={headbarRight} alt="header-bar-right" />
          </header>
          {props.children}
        </div>
      </ScaleComponent>
    </div>
  );
}

export default MobileSkeleton;
