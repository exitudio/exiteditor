import React, { useState, useRef } from "react";
import "./Fb.scss";
import headerLeft from "./images/header-left.jpg";
import headerRight from "./images/header-right.jpg";
import footerLeft from "./images/footer-left.jpg";
import footerLeftTyping from "./images/footer-left-typing.jpg";
import footerRight from "./images/footer-right.jpg";
import ChatElement from "./ChatElements";
import AddChatElements from "./ChatElements/AddChatElements";
import { connect, useDispatch } from "react-redux";
import profile from "../../images/profile.jpg";
import { openUploadImage } from "utils";
import { deleteChat } from "../../../redux/chatApps/chatAppsActions";
import { contentEditableProps } from "../../../utils";
import useClickOutside from "../../../hooks/useClickOutside";

function Fb(props) {
  const onChange = (e) => {
    openUploadImage(e, (fileReader) => {
      setProfileImage(fileReader.result);
    });
  };
  const dispatch = useDispatch();
  const deleteElement = (id) => {
    dispatch(deleteChat(id));
  };
  const [profileImage, setProfileImage] = useState(profile);

  const [footerFocus, setFooterFocus] = useState(false);
  const textSending = useRef();
  const footerRef = useRef();
  const onClickFooter = () => {
    textSending.current && textSending.current.focus();
    setFooterFocus(true);
  };
  useClickOutside(footerRef, () => setFooterFocus(false));
  return (
    <div className="fb">
      <div className="background-repeat" />
      <header>
        <img src={headerLeft} alt="header-left" />
        <label>
          <img src={profileImage} alt="profile" className="profile" />
          <input type="file" className="disable" onChange={onChange} />
        </label>
        <div className="name" {...contentEditableProps}>
          Lisa
        </div>
        <img src={headerRight} alt="header-right" />
      </header>
      <div className="chat-body">
        {props.chatElements.map((chatElement, i, chatElements) => {
          const prevSide = chatElements[i - 1] && chatElements[i - 1].side;
          const nextSide = chatElements[i + 1] && chatElements[i + 1].side;
          const nextIsNewReplyProfile =
            chatElements[i + 1] && chatElements[i + 1].isNewReplyProfile;
          const isTop =
            prevSide !== chatElement.side || chatElement.isNewReplyProfile;
          const isBottom =
            nextSide !== chatElement.side || nextIsNewReplyProfile;
          return (
            <ChatElement
              chatElement={chatElement}
              isTop={isTop}
              isBottom={isBottom}
              key={chatElement.id}
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
        />
      </footer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  chatElements: state.chatApps.chatElements,
});
export default connect(mapStateToProps)(Fb);
