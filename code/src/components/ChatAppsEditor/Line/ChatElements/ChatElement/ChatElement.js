import React, { useState } from "react";
import { StatusElement, Profile, Lump } from "./SubComponents";
import profile from "../../../../images/profile.jpg";
import { onPaste } from "../../../../../utils";
import EditButtons from "../../../../reuseComponents/EditButtons";
import { contentEditableProps } from "../../../../../utils";

const ChatElement = ({ chatElement, isPrimary, onDelete }) => {
  const { side, isNewReplyProfile } = chatElement;
  const [profileImage, setProfileImage] = useState(profile);
  return (
    <div
      className={`chat-element ${side} ${isPrimary ? "primary" : ""}`}
    >
      <Profile
        side={side}
        showProfile={isPrimary}
        setProfileImage={setProfileImage}
        src={profileImage}
      />

      <div className="text-wrapper">
        {isNewReplyProfile ? (
          <div {...contentEditableProps} className="profile-name">
            Someone
          </div>
        ) : null}
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
      </div>
      <StatusElement side={side} />
      <EditButtons onDelete={onDelete} chatElement={chatElement} side={side} />
    </div>
  );
};

export default ChatElement;
