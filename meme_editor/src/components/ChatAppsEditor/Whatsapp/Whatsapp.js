import React from "react";
import "./Whatsapp.scss";
import profile from "./images/profile.jpg";
import plus from "./images/plus.jpg";
import _image from "./images/image.jpg";
import mic from "./images/mic.jpg";
import ChatElement from "./ChatElements";
import AddChatElements from "./ChatElements/AddChatElements";
import { connect } from "react-redux";

function Whatsapp(props) {
  return (
    <div className="whatsapp">
      <div className="background-repeat" />
      <header>
        <div className="arrow-left" />
        <img src={profile} alt="profile" className="profile" />
        <div className="name">Kartua Smith USA</div>
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
