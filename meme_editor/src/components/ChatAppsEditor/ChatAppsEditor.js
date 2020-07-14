import React from "react";
import Whatsapp from "./Whatsapp";
import Line from "./Line";
import "./ChatAppsEditor.scss";
import MobileSkeleton from "../MobileSkeleton";

function ChatAppsEditor() {
  return (
    <div className="canvas">
      <MobileSkeleton>
        <Line />
      </MobileSkeleton>
    </div>
  );
}

export default ChatAppsEditor;
