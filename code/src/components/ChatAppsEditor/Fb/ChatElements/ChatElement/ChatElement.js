import React, { useState } from "react";
import { Profile } from "./SubComponents";
import profile from "../../../../images/profile.jpg";
import EditButtons from "../../../../reuseComponents/EditButtons";
import { contentEditableProps } from "../../../../../utils";

const ChatElement = ({ chatElement, isTop, isBottom, onDelete }) => {
  const { side } = chatElement;
  const [profileImage, setProfileImage] = useState(profile);

  return (
    <div className={`chat-element ${side}`}>
      <Profile
        side={side}
        showProfile={isBottom}
        setProfileImage={setProfileImage}
        src={profileImage}
      />
      <div className="text-wrapper">
        <div
          className={`all-text ${isTop ? "is-top" : ""} ${
            isBottom ? "is-bottom" : ""
          }`}
        >
          <div {...contentEditableProps}>Add text ...</div>
        </div>
      </div>
      <EditButtons onDelete={onDelete} chatElement={chatElement} side={side} />
    </div>
  );
};

export default ChatElement;
