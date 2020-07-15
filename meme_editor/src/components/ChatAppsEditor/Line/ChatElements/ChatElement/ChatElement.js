import React, { useState } from "react";
import Popover from "./Popover";
import { StatusElement, Profile, Lump, onPaste } from "./SubComponents";
import profile from "../../../../images/profile.png";

const ChatElement = (props) => {
  const [showPopOver, setShowPopOver] = useState(false);
  const [showProfile, setShowProfile] = useState(true);
  const [profileImage, setProfileImage] = useState(profile);
  const closePopOver = () => setShowPopOver(false);
  return (
    <div className={`chat-element ${props.side}`}>
      <div className="text-wrapper">
        <Popover
          show={showPopOver}
          close={closePopOver}
          showProfile={showProfile}
          setShowProfile={setShowProfile}
          setProfileImage={setProfileImage}
        />
        <Profile
          side={props.side}
          showProfile={showProfile}
          setShowProfile={setShowProfile}
          showPopOver={showPopOver}
          setShowPopOver={setShowPopOver}
          src={profileImage}
        />

        <StatusElement side={props.side} show="right" />
        <div className="all-text">
          <Lump side={props.side} showProfile={showProfile} />
          <div
            contentEditable="true"
            suppressContentEditableWarning={true}
            onPaste={onPaste}
          >
            Add text ...
          </div>
        </div>
        <StatusElement side={props.side} show="left" />
      </div>
    </div>
  );
};

export default ChatElement;
