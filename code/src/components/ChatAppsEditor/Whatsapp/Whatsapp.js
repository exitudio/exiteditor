import React, { useState } from "react";
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
  let isMultipleProfile = false;
  for (let chatElement of chatElements) {
    if (chatElement.isNewReplyProfile) {
      isMultipleProfile = true;
      break;
    }
  }
  const [profileImage, setProfileImage] = useState(profile);
  return (
    <div className="whatsapp">
      <div className="background-repeat" />
      <header>
        <div className="arrow-left" />
        <label>
          <img src={profileImage} alt="profile" className="profile" />
          <input type="file" className="disable" onChange={onChange} />
        </label>

        <div
          className="name"
          contentEditable="true"
          suppressContentEditableWarning={true}
        >
          Lisa
        </div>
        <div className="icon-right" />
      </header>
      <div className="chat-body">
        {chatElements.map((chatElement, i, chatElements) => {
          const prevSide = chatElements[i - 1] && chatElements[i - 1].side;
          const isPrimary =
            prevSide !== chatElement.side ||
            (isMultipleProfile && chatElements[i].isNewReplyProfile);
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
      <footer>
        <img src={plus} alt="plus" className="plus" />
        <div className="text-box"></div>
        <img src={_image} alt="img" className="img" />
        <img src={mic} alt="mic" className="mic" />
      </footer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  chatElements: state.chatApps.chatElements,
});
export default connect(mapStateToProps)(Whatsapp);
