import React, { useRef } from "react";
import "./WeChat.scss";
import headerLeft from "./images/header-left.jpg";
import headerRight from "./images/header-right.jpg";
import footerLeft from "./images/footer-left.jpg";
import footerRight from "./images/footer-right.jpg";
import ChatElement from "./ChatElements";
import AddChatElements from "./ChatElements/AddChatElements";
import { connect, useDispatch } from "react-redux";
import { deleteChat } from "../../../redux/chatApps/chatAppsActions";
import { isGroupFromElements } from "../../../helpers";
import { contentEditableProps } from "../../../utils";

function WeChat({ chatElements }) {
  const dispatch = useDispatch();
  const deleteElement = (id) => {
    dispatch(deleteChat(id));
  };
  let isGroup = isGroupFromElements(chatElements);

  const textSending = useRef();
  const onClickFooter = () => {
    textSending.current.focus();
  };
  return (
    <div className="wechat">
      <header>
        <img src={headerLeft} alt="header-left" />
        <div className="name" {...contentEditableProps}>
          Lisa
        </div>
        <img src={headerRight} alt="header-right" />
      </header>
      <div className="chat-body">
        {chatElements.map((chatElement, i, chatElements) => {
          const prevSide = chatElements[i - 1] && chatElements[i - 1].side;
          const isPrimary =
            !isGroup ||
            (isGroup &&
              (prevSide !== chatElement.side ||
                chatElements[i].isNewReplyProfile));
          return (
            <ChatElement
              chatElement={chatElement}
              key={chatElement.id}
              isPrimary={isPrimary}
              onDelete={() => deleteElement(chatElement.id)}
            />
          );
        })}
        <AddChatElements side="right" />
        <AddChatElements side="left" />
      </div>
      <footer onClick={onClickFooter}>
        <img src={footerLeft} alt="footer-left" />
        <div className="mid" />
        <img src={footerRight} alt="footer-right" />
        <div
          className="text-sending"
          ref={textSending}
          {...contentEditableProps}
        ></div>
      </footer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  chatElements: state.chatApps.chatElements,
});
export default connect(mapStateToProps)(WeChat);
