import React from "react";
import "./Line.scss";
import headerLeft from "./images/header-left.jpg";
import headerRight from "./images/header-right.jpg";
import footerLeft from "./images/footer-left.jpg";
import footerMid from "./images/footer-mid.jpg";
import footerRight from "./images/footer-right.jpg";
import ChatElement from "./ChatElements";
import AddChatElements from "./ChatElements/AddChatElements";
import { connect } from "react-redux";

function Line(props) {
  return (
    <div className="line">
      <div className="background-repeat" />
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
        {props.chatElements.map((chatElement) => (
          <ChatElement {...chatElement} key={chatElement.id} />
        ))}
        <AddChatElements side="right" />
        <AddChatElements side="left" />
      </div>
      <footer>
        <img src={footerLeft} alt="footer-left" />
        <img src={footerMid} alt="footer-mid" className="mid"/>
        <img src={footerRight} alt="footer-right" />
      </footer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  chatElements: state.chatApps.chatElements,
});
export default connect(mapStateToProps)(Line);
