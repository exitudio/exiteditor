import React, { useState, useRef } from "react";
import "./Whatsapp.scss";
import profile from "../../images/profile.jpg";
import plus from "./images/plus.jpg";
import _image from "./images/image.jpg";
import mic from "./images/mic.jpg";
import ChatElement from "./ChatElements";
import AddChatElements from "./ChatElements/AddChatElements";
import { connect, useDispatch } from "react-redux";
import { openUploadImage } from "utils";
import { deleteChat } from "../../../redux/chatApps/chatAppsActions";
import { isGroupFromElements } from "../../../helpers";
import { contentEditableProps } from "../../../utils";

function Whatsapp({ chatElements }) {
  const onChange = (e) => {
    openUploadImage(e, (fileReader) => {
      setProfileImage(fileReader.result);
    });
  };
  const dispatch = useDispatch();
  const deleteElement = (id) => {
    dispatch(deleteChat(id));
  };
  let isGroup = isGroupFromElements(chatElements);
  const [profileImage, setProfileImage] = useState(profile);

  const textSending = useRef();
  const onClickFooter = () => {
    textSending.current.focus();
  };
  return (
    <div className="whatsapp">
      <div className="background-repeat" />
      <header>
        <div className="arrow-left" />
        <label>
          <img src={profileImage} alt="profile" className="profile" />
          <input type="file" className="disable" onChange={onChange} />
        </label>

        <div className="name" {...contentEditableProps}>
          Lisa
        </div>
        <div className="icon-right" />
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
      <footer onClick={onClickFooter}>
        <img src={plus} alt="plus" className="plus" />
        <div className="text-box"></div>
        <img src={_image} alt="img" className="img" />
        <img src={mic} alt="mic" className="mic" />
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
export default connect(mapStateToProps)(Whatsapp);
