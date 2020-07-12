import React from "react";
import Whatsapp from "./Whatsapp";
import "./ChatAppsEditor.scss";
import MobileSkeleton from "../MobileSkeleton";
import html2canvas from "html2canvas";

setTimeout(() => {
  html2canvas(document.body).then(function (canvas) {
    document.body.appendChild(canvas);
  });
}, 1000);
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
