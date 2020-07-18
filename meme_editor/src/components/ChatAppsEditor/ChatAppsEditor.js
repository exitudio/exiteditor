import React, { useState } from "react";
import Whatsapp from "./Whatsapp";
import Line from "./Line";
import Fb from "./Fb";
import WeChat from "./WeChat";
import "./ChatAppsEditor.scss";
import MobileSkeleton from "../MobileSkeleton";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import lineImage from "../images/line.png";
import whatsappImage from "../images/whatsapp.png";
import fb from "../images/fb.jpg";
import wechat from "../images/wechat.png";

function ChatAppsEditor() {
  const [App, setApp] = useState(WeChat);
  return (
    <div className="chat-app">
      <div className="app-selector">
        <ButtonGroup
          variant="text"
          color="primary"
          aria-label="text primary button group"
        >
          <Button
            variant={App === Whatsapp ? "contained" : "text"}
            onClick={() => setApp(Whatsapp)}
          >
            <img src={whatsappImage} alt="whatsapp" />
          </Button>
          <Button
            variant={App === Line ? "contained" : "text"}
            onClick={() => setApp(Line)}
          >
            <img src={lineImage} alt="line" />
          </Button>
          <Button
            variant={App === Fb ? "contained" : "text"}
            onClick={() => setApp(Fb)}
          >
            <img src={fb} alt="line" />
          </Button>
          <Button
            variant={App === null ? "contained" : "text"}
            onClick={() => setApp(WeChat)}
          >
            <img src={wechat} alt="line" />
          </Button>
        </ButtonGroup>
      </div>
      <div className="canvas">
        <MobileSkeleton>
          <App />
        </MobileSkeleton>
      </div>
    </div>
  );
}

export default ChatAppsEditor;
