import React from "react";
import "./MobileSkeleton.scss";
import signal from "./images/signal.png";
import wifi from "./images/wifi.png";
import gps from "./images/gps.png";
import battery from "./images/battery.png";
import ScaleComponent from "../reuseComponents/ScaleComponent";

function MobileSkeleton(props) {
  return (
    <div className="all-mobile">
      <ScaleComponent scale={0.5}>
        <div
          id="root-image"
          className="mobile-skeleton"
          data-remove-style="border"
        >
          <header>
            <img src={signal} alt="signal" />
            <img src={wifi} alt="wifi" />
            <img src={gps} alt="gps" />
            <img src={battery} alt="battery" />

          </header>
          {props.children}
        </div>
      </ScaleComponent>
    </div>
  );
}

export default MobileSkeleton;
