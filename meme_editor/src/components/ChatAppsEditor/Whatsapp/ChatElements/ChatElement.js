import React, { useState } from "react";
import lumpRight from "../images/lump-right.png";
import lumpLeft from "../images/lump-left.png";
import sending from "../images/sending.png";
import sent from "../images/sent.png";
import read from "../images/read.png";
import {
  STATUS_SENDING,
  STATUS_SENT,
  STATUS_READ,
} from "constants/chatConstant";
import StatusPopup from "./StatusPopup";

const mapImageStatus = {
  [STATUS_SENDING]: sending,
  [STATUS_SENT]: sent,
  [STATUS_READ]: read,
};

const ChatElementRight = (props) => {
  const [isPopupOpening, setOpenPopup] = useState(false);
  const [status, setStatus] = useState(STATUS_READ);
  const onStatusClick = (status) => {
    setStatus(status);
    setOpenPopup(false);
  };
  const openStatusPopup = () => setOpenPopup(true);
  const closeStatusPopup = () => setOpenPopup(false);

  // for prevent pasting style
  const onPaste = (e) => {
    e.preventDefault();
    // get text representation of clipboard
    var text = (e.originalEvent || e).clipboardData.getData("text/plain");
    // insert text manually
    document.execCommand("insertHTML", false, text);
  };
  return (
    <div className={`chat-element ${props.side}`}>
      <div className="text-wrapper">
        {props.side === "left" ? (
          <img src={lumpLeft} alt="lump-left" className="lump" />
        ) : (
          <img src={lumpRight} alt="lump-right" className="lump" />
        )}
        <div className="all-text">
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
            {props.side === "right" ? (
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
    </div>
  );
};

export default ChatElementRight;
