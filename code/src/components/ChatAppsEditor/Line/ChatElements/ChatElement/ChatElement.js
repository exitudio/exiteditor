import React, { useState } from "react";
import { StatusElement, Profile, Lump } from "./SubComponents";
import profile from "../../../../images/profile.png";
import DeleteIcon from "@material-ui/icons/Delete";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import { onPaste } from "../../../../../utils";

const ChatElement = ({ side, isPrimary, onDelete }) => {
  const [profileImage, setProfileImage] = useState(profile);
  const [isShowingDelete, setShowingDelete] = useState(false);
  return (
    <div
      className={`chat-element ${side}`}
      onMouseOver={() => setShowingDelete(true)}
      onMouseOut={() => setShowingDelete(false)}
    >
      <Profile
        side={side}
        showProfile={isPrimary}
        setProfileImage={setProfileImage}
        src={profileImage}
      />

      <div className="text-wrapper">
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
      <div className={`${isShowingDelete ? "" : "disable"}`}>
        <Tooltip title="Delete">
          <Fab
            color="secondary"
            onClick={onDelete}
            style={{ flexShrink: 0 }}
            data-remove-from-image
          >
            <DeleteIcon style={{ width: 30, height: 30, color: "white" }} />
          </Fab>
        </Tooltip>
      </div>
    </div>
  );
};

export default ChatElement;
