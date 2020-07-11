import React from "react";
import Whatsapp from "./Whatsapp";
import "./ChatAppsEditor.scss";
import MobileSkeleton from "./MobileSkeleton";

function ChatAppsEditor() {
  return (
    <div className="canvas">
      <MobileSkeleton>
        <Whatsapp />
      </MobileSkeleton>
    </div>
  );
}

export default ChatAppsEditor;
