import React from "react";
import "./MobileSkeleton.scss";
import signal from "./images/signal.png";
import wifi from "./images/wifi.png";
import gps from "./images/gps.png";
import battery from "./images/battery.png";
import signalWhite from "./images/signal-white.png";
import wifiWhite from "./images/wifi-white.png";
import gpsWhite from "./images/gps-white.png";
import batteryWhite from "./images/battery-white.png";
import ScaleComponent from "../reuseComponents/ScaleComponent";
import { connect } from "react-redux";
import { contentEditableProps } from "../../utils";
import EditPopSign from "../reuseComponents/EditPopSign";

function MobileSkeleton({ children, appInfo }) {
  return (
    <div className="all-mobile">
      <div className="border-wrapper">
        <ScaleComponent scale={0.5}>
          <div
            id="root-image"
            className="mobile-skeleton"
            data-remove-style="border"
          >
            <header
              style={{ backgroundColor: appInfo.color }}
              className={`${appInfo.isWhiteTextHeader ? "white" : ""}`}
            >
              <img
                src={appInfo.isWhiteTextHeader ? signalWhite : signal}
                alt="signal"
              />
              <div className="operator" {...contentEditableProps}>
                <EditPopSign />
                T-Mobile
              </div>
              <img
                src={appInfo.isWhiteTextHeader ? wifiWhite : wifi}
                alt="wifi"
              />
              <div className="time" {...contentEditableProps}>
                <EditPopSign className="center top" />
                8:23 PM
              </div>
              <img src={appInfo.isWhiteTextHeader ? gpsWhite : gps} alt="gps" />
              <div className="batter-percentage">50%</div>
              <img
                src={appInfo.isWhiteTextHeader ? batteryWhite : battery}
                alt="battery"
              />
            </header>
            {children}
          </div>
        </ScaleComponent>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  mobileHeadColor: state.application.mobileHeadColor,
  isWhiteTextHeader: state.application.isWhiteTextHeader,
});
export default connect(mapStateToProps)(MobileSkeleton);
