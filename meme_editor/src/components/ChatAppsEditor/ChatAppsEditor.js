import React, { useState } from "react";
import Whatsapp from "./Whatsapp";
import Line from "./Line";
import "./ChatAppsEditor.scss";
import MobileSkeleton from "../MobileSkeleton";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import lineImage from "../images/line.png";
import whatsappImage from "../images/whatsapp.png";

function ChatAppsEditor() {
  const [App, setApp] = useState(Whatsapp);
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
