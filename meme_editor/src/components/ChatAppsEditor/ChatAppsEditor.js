import React from "react";
import Whatsapp from "./Whatsapp";
import "./ChatAppsEditor.scss";
import MobileSkeleton from "../MobileSkeleton";
import ChatController from "./ChatController";

function ChatAppsEditor() {
  return (
    <div className="canvas">
      <ChatController>
        <MobileSkeleton>
          <Whatsapp />
        </MobileSkeleton>
      </ChatController>
    </div>
  );
}

export default ChatAppsEditor;
