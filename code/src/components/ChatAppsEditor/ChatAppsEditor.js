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
import { useDispatch } from "react-redux";
import { changeMobileHeadColor } from "../../redux/application/applicationActions";
import { resetChat } from "../../redux/chatApps/chatAppsActions";

const appsInfo = {
  whatsapp: {
    id: "whatsapp",
    App: Whatsapp,
    icon: whatsappImage,
    color: "#f6f6f6",
  },
  line: {
    id: "line",
    App: Line,
    icon: lineImage,
    color: "#202a43",
    isWhiteTextHeader: true,
  },
  fb: {
    id: "fb",
    App: Fb,
    icon: fb,
    color: "#fff",
  },
  wechat: {
    id: "wechat",
    App: WeChat,
    icon: wechat,
    color: "#ebedea",
  },
};

function ChatAppsEditor() {
  const [currentApp, setCurrentApp] = useState(appsInfo.whatsapp);
  const dispatch = useDispatch();
  const changeApp = (info) => {
    setCurrentApp(info);
    dispatch(resetChat());
    dispatch(changeMobileHeadColor(info.color, info.isWhiteTextHeader));
  };
  return (
    <div className="chat-app">
      <div className="app-selector">
        <ButtonGroup
          variant="text"
          color="primary"
          aria-label="text primary button group"
        >
          {Object.keys(appsInfo).map((id) => {
            const info = appsInfo[id];
            return (
              <Button
                key={info.id}
                variant={info.id === currentApp.id ? "contained" : "text"}
                onClick={() => changeApp(info)}
              >
                <img src={info.icon} alt="whatsapp" />
              </Button>
            );
          })}
        </ButtonGroup>
      </div>
      <div className="canvas">
        <MobileSkeleton>
          <currentApp.App />
        </MobileSkeleton>
      </div>
    </div>
  );
}

export default ChatAppsEditor;
