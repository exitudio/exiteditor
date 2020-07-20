import React, { useEffect } from "react";
import "./ChatAppsEditor.scss";
import MobileSkeleton from "../MobileSkeleton";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { useDispatch } from "react-redux";
import { resetChat } from "../../redux/chatApps/chatAppsActions";
import { Link, useParams, useLocation } from "react-router-dom";
import chatAppsInfo from "./chatAppsInfo";
import usePrevious from "../../hooks/usePrevious";
import useDidUpdate from "../../hooks/useDidUpdate";

function ChatAppsEditor() {
  let { appId } = useParams();
  appId = appId ? appId : chatAppsInfo.whatsapp.id;
  const currentChatAppInfo = chatAppsInfo[appId];
  const prevAppId = usePrevious(appId);
  const dispatch = useDispatch();
  const location = useLocation();
  useDidUpdate(() => {
    prevAppId !== appId && dispatch(resetChat());
  });
  useEffect(() => {
    prevAppId !== appId &&
      window.ga("send", {
        hitType: "pageView",
        page: location.pathname,
      });
  });
  return (
    <div className="chat-app">
      <div className="app-selector">
        <ButtonGroup
          variant="text"
          color="primary"
          aria-label="text primary button group"
        >
          {Object.keys(chatAppsInfo).map((id) => {
            const info = chatAppsInfo[id];
            return (
              <Button
                key={info.id}
                variant={
                  info.id === currentChatAppInfo.id ? "contained" : "text"
                }
                component={Link}
                to={`/chat-generator/${id}`}
              >
                <img src={info.icon} alt={currentChatAppInfo.id} />
              </Button>
            );
          })}
        </ButtonGroup>
      </div>
      <div className="canvas">
        <MobileSkeleton appInfo={currentChatAppInfo}>
          <currentChatAppInfo.App />
        </MobileSkeleton>
      </div>
    </div>
  );
}

export default ChatAppsEditor;
