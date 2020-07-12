import React from "react";
import TextSender from "./TextSender";

const ChatController = (props) => {
  return (
    <div className="chat-controller">
      <TextSender className="left-controller" />
      {props.children}
      <TextSender className="right-controller" />
    </div>
  );
};

export default ChatController;
