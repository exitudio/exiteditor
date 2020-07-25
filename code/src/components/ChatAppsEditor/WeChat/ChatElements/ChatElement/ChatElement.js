import React, { useState } from "react";
import { Profile } from "./SubComponents";
import profile from "../../../../images/profile.jpg";
import lumpLeft from "../../images/lump-left.png";
import lumpRight from "../../images/lump-right.png";
import { onPaste, contentEditableProps } from "../../../../../utils";
import EditButtons from "../../../../reuseComponents/EditButtons";

const ChatElement = ({ chatElement, onDelete, isPrimary }) => {
  const { side, isNewReplyProfile } = chatElement;
  const [profileImage, setProfileImage] = useState(profile);
  return (
    <div className={`chat-element ${side}`}>
      <Profile
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
        <div className={"all-text"}>
          <img
            src={side === "left" ? lumpLeft : lumpRight}
            alt="lump-left"
            className="lump"
          />
          <div
            contentEditable="true"
            suppressContentEditableWarning={true}
            onPaste={onPaste}
          >
            Add text ...
          </div>
        </div>
      </div>
      <EditButtons onDelete={onDelete} chatElement={chatElement} side={side} />
    </div>
  );
};

export default ChatElement;
