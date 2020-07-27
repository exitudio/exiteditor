import React, { useRef, useState } from "react";
import "./Line.scss";
import headerLeft from "./images/header-left.jpg";
import headerRight from "./images/header-right.jpg";
import footerLeftTyping from "./images/footer-left-typing.jpg";
import footerLeft from "./images/footer-left.jpg";
import footerRight from "./images/footer-right.jpg";
import ChatElement from "./ChatElements";
import AddChatElements from "./ChatElements/AddChatElements";
import { connect, useDispatch } from "react-redux";
import { deleteChat } from "../../../redux/chatApps/chatAppsActions";
import { isGroupFromElements } from "../../../helpers";
import { contentEditableProps } from "../../../utils";
import useClickOutside from "../../../hooks/useClickOutside";

function Line({ chatElements }) {
  const dispatch = useDispatch();
  const deleteElement = (id) => {
    dispatch(deleteChat(id));
  };
  let isGroup = isGroupFromElements(chatElements);

  const [footerFocus, setFooterFocus] = useState(false);
  const textSending = useRef();
  const footerRef = useRef();
  const onClickFooter = () => {
    textSending.current && textSending.current.focus();
    setFooterFocus(true);
  };
  useClickOutside(footerRef, () => setFooterFocus(false));
  return (
    <div className="line">
      <div className="background-repeat" />
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
            prevSide !== chatElement.side ||
            (isGroup && chatElements[i].isNewReplyProfile);
          return (
            <ChatElement
              isPrimary={isPrimary}
              key={chatElement.id}
              chatElement={chatElement}
              onDelete={() => deleteElement(chatElement.id)}
            />
          );
        })}
        <AddChatElements side="right" />
        <AddChatElements side="left" />
      </div>
      <footer onClick={onClickFooter} ref={footerRef}>
        <img
          src={
            footerFocus ||
            (textSending.current && textSending.current.textContent)
              ? footerLeftTyping
              : footerLeft
          }
          alt="footer-left"
        />
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
export default connect(mapStateToProps)(Line);
