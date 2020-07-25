import React, { useState, useRef } from "react";
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
import { contentEditableProps } from "../../../../utils";
import EditButtons from "./EditButtons";
import { BlockPicker } from "react-color";
import useClickOutside from "../../../../hooks/useClickOutside";

const mapImageStatus = {
  [STATUS_SENDING]: sending,
  [STATUS_SENT]: sent,
  [STATUS_READ]: read,
};

const ChatElementRight = ({ isPrimary, onDelete, chatElement }) => {
  const { side, isNewReplyProfile } = chatElement;
  const [isPopupOpening, setOpenPopup] = useState(false);
  const [status, setStatus] = useState(STATUS_READ);
  const onStatusClick = (status) => {
    setStatus(status);
    setOpenPopup(false);
  };
  const openStatusPopup = () => setOpenPopup(true);
  const closeStatusPopup = () => setOpenPopup(false);
  const [nameColor, setNameColor] = useState("#37d67a");
  const [showColorPanel, setShowColorPanel] = useState(false);
  const profileNameRef = useRef();
  useClickOutside(profileNameRef, () => setShowColorPanel(false));
  return (
    <div className={`chat-element ${side} ${isPrimary ? "primary" : ""}`}>
      <div className="text-wrapper">
        <Lump side={side} isPrimary={isPrimary} />
        <div className={`all-text ${isPrimary ? "primary" : ""}`}>
          {isNewReplyProfile ? (
            <div
              {...contentEditableProps}
              className="profile-name"
              style={{ color: nameColor }}
              onFocus={() => setShowColorPanel(true)}
              ref={profileNameRef}
            >
              Name.
              <div
                style={{
                  display: showColorPanel ? "" : "none",
                  position: "absolute",
                  zIndex: 100,
                  top: 60,
                }}
              >
                <BlockPicker
                  color={nameColor}
                  onChangeComplete={(color) => setNameColor(color.hex)}
                />
              </div>
            </div>
          ) : null}
          <div {...contentEditableProps}>Add text ...</div>
          <div className="status">
            <span className="time" {...contentEditableProps}>
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
      <EditButtons
        onDelete={onDelete}
        chatElement={chatElement}
        side={side}
      />
    </div>
  );
};

export default ChatElementRight;
