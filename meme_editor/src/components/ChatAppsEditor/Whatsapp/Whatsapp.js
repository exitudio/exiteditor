import React, { useState } from "react";
import "./Whatsapp.scss";
import profile from "../../images/profile.png";
import plus from "./images/plus.jpg";
import _image from "./images/image.jpg";
import mic from "./images/mic.jpg";
import ChatElement from "./ChatElements";
import AddChatElements from "./ChatElements/AddChatElements";
import { connect } from "react-redux";
import { openUploadImage } from "utils";

function Whatsapp(props) {
  const onChange = (e) => {
    openUploadImage(e, (fileReader) => {
      setProfileImage(fileReader.result);
    });
  };
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
        {props.chatElements.map((chatElement) => (
          <ChatElement {...chatElement} key={chatElement.id} />
        ))}
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
