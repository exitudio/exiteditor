import React, { useState } from "react";
import sending from "../images/sending.png";
import sent from "../images/sent.png";
import read from "../images/read.png";
import {
  STATUS_SENDING,
  STATUS_SENT,
  STATUS_READ,
} from "constants/chatConstant";
import StatusPopup from "./StatusPopup";
import { Lump } from "./SubComponents";
import DeleteIcon from "@material-ui/icons/Delete";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";

const mapImageStatus = {
  [STATUS_SENDING]: sending,
  [STATUS_SENT]: sent,
  [STATUS_READ]: read,
};

const ChatElementRight = ({ side, isPrimary, onDelete }) => {
  const [isPopupOpening, setOpenPopup] = useState(false);
  const [status, setStatus] = useState(STATUS_READ);
  const onStatusClick = (status) => {
    setStatus(status);
    setOpenPopup(false);
  };
  const openStatusPopup = () => setOpenPopup(true);
  const closeStatusPopup = () => setOpenPopup(false);
  const [isShowingDelete, setShowingDelete] = useState(false);

  // for prevent pasting style
  const onPaste = (e) => {
    e.preventDefault();
    // get text representation of clipboard
    var text = (e.originalEvent || e).clipboardData.getData("text/plain");
    // insert text manually
    document.execCommand("insertHTML", false, text);
  };
  return (
    <div
      className={`chat-element ${side}`}
      onMouseOver={() => setShowingDelete(true)}
      onMouseOut={() => setShowingDelete(false)}
    >
      <div className="text-wrapper">
        <Lump side={side} isPrimary={isPrimary} />
        <div className={`all-text ${isPrimary ? "primary" : ""}`}>
          <div
            contentEditable="true"
            suppressContentEditableWarning={true}
            onPaste={onPaste}
          >
            Add text ...
          </div>
          <div className="status">
            <span
              contentEditable="true"
              suppressContentEditableWarning={true}
              onPaste={onPaste}
            >
              9.12 AM
            </span>
            {side === "right" ? (
              <img
                src={mapImageStatus[status]}
                alt="status"
                height="20"
                style={{ cursor: "pointer" }}
                onClick={openStatusPopup}
              />
            ) : null}
          </div>
        </div>
        {isPopupOpening ? (
          <StatusPopup
            status={status}
            onStatusClick={onStatusClick}
            close={closeStatusPopup}
          />
        ) : null}
      </div>
      <div class={`${isShowingDelete ? "" : "disable"}`}>
        <Tooltip title="Delete">
          <Fab
            color="secondary"
            onClick={onDelete}
            style={{ margin: "0 20px 2px 20px", flexShrink: 0 }}
            data-remove-from-image
          >
            <DeleteIcon style={{ width: 30, height: 30, color: "white" }} />
          </Fab>
        </Tooltip>
      </div>
    </div>
  );
};

export default ChatElementRight;
