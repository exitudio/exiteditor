import React, { useState } from "react";
import { StatusElement, Profile, Lump, onPaste } from "./SubComponents";
import profile from "../../../../images/profile.png";

const ChatElement = ({ side, isPrimary }) => {
  const [profileImage, setProfileImage] = useState(profile);
  return (
    <div className={`chat-element ${side}`}>
      <div className="text-wrapper">
        <Profile
          side={side}
          showProfile={isPrimary}
          setProfileImage={setProfileImage}
          src={profileImage}
        />

        <StatusElement side={side} show="right" />
        <div className="all-text">
          <Lump side={side} showProfile={isPrimary} />
          <div
            contentEditable="true"
            suppressContentEditableWarning={true}
            onPaste={onPaste}
          >
            Add text ...
          </div>
        </div>
        <StatusElement side={side} show="left" />
      </div>
    </div>
  );
};

export default ChatElement;
