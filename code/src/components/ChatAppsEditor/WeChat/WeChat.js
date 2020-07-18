import React from "react";
import "./WeChat.scss";
import headerLeft from "./images/header-left.jpg";
import headerRight from "./images/header-right.jpg";
import footerLeft from "./images/footer-left.jpg";
import footerRight from "./images/footer-right.jpg";
import ChatElement from "./ChatElements";
import AddChatElements from "./ChatElements/AddChatElements";
import { connect, useDispatch } from "react-redux";
import { deleteChat } from "../../../redux/chatApps/chatAppsActions";

function WeChat(props) {
  const dispatch = useDispatch();
  const deleteElement = (id) => {
    dispatch(deleteChat(id));
  };
  return (
    <div className="wechat">
      <header>
        <img src={headerLeft} alt="header-left" />
        <div
          className="name"
          contentEditable="true"
          suppressContentEditableWarning={true}
        >
          Lisa
        </div>
        <img src={headerRight} alt="header-right" />
      </header>
      <div className="chat-body">
        {props.chatElements.map((chatElement, i, chatElements) => {
          return (
            <ChatElement
              {...chatElement}
              key={chatElement.id}
              onDelete={() => deleteElement(chatElement.id)}
            />
          );
        })}
        <AddChatElements side="right" />
        <AddChatElements side="left" />
      </div>
      <footer>
        <img src={footerLeft} alt="footer-left" />
        <div className="mid" />
        <img src={footerRight} alt="footer-right" />
      </footer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  chatElements: state.chatApps.chatElements,
});
export default connect(mapStateToProps)(WeChat);
