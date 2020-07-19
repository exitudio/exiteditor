import React, { useState } from "react";
import { Profile } from "./SubComponents";
import profile from "../../../../images/profile.png";
import DeleteIcon from "@material-ui/icons/Delete";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import lumpLeft from "../../images/lump-left.png";
import lumpRight from "../../images/lump-right.png";
import { onPaste } from "../../../../../utils";

const ChatElement = ({ side, onDelete }) => {
  const [profileImage, setProfileImage] = useState(profile);
  const [isShowingDelete, setShowingDelete] = useState(false);

  return (
    <div
      className={`chat-element ${side}`}
      onMouseOver={() => setShowingDelete(true)}
      onMouseOut={() => setShowingDelete(false)}
    >
      <Profile setProfileImage={setProfileImage} src={profileImage} />
      <div className="text-wrapper">
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
      <div className={`${isShowingDelete ? "" : "disable"}`}>
        <Tooltip title="Delete">
          <Fab
            color="secondary"
            onClick={onDelete}
            style={{ margin: "0 20px 2px 20px" }}
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
