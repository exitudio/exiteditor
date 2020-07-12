import React, { useState } from "react";
import lumpRight from "../images/lump-right.png";
import lumpLeft from "../images/lump-left.png";
import sending from "../images/sending.png";
import sent from "../images/sent.png";
import read from "../images/read.png";
import { useDispatch } from "react-redux";
import { updateChat } from "redux/chatApps/chatAppsActions";
import {
  STATUS_SENDING,
  STATUS_SENT,
  STATUS_READ,
} from "constants/chatConstant";

const mapImageStatus = {
  [STATUS_SENDING]: sending,
  [STATUS_SENT]: sent,
  [STATUS_READ]: read,
};

const ChatElementRight = (props) => {
  const dispatch = useDispatch();
  const [isOvering, changeOver] = useState(false);

  const dispatchUpdateChange = (key, value) => {
    dispatch(updateChat(props.id, key, value));
  };
  const onTextChange = (e) => dispatchUpdateChange("text", e.target.value);
  const onTimeChange = (e) => dispatchUpdateChange("timestamp", e.target.value);
  const onStatusClick = (e) => {
    dispatchUpdateChange("status", e.target.getAttribute("status"));
  };

  return (
    <div
      className={`chat-element ${props.side}`}
      onMouseEnter={() => changeOver(true)}
      onMouseLeave={() => changeOver(false)}
    >
      <div className="text-wrapper">
        {props.side === "left" ? (
          <img src={lumpLeft} alt="lump-left" className="lump" />
        ) : (
          <img src={lumpRight} alt="lump-right" className="lump" />
        )}
        <div className="all-text">
          {isOvering ? (
            <textarea
              name="send-text"
              rows="4"
              cols="20"
              placeholder="Add text ..."
              onChange={onTextChange}
              value={props.text}
            />
          ) : (
            <div>{props.text ? props.text : <em>Add text ...</em>}</div>
          )}
          <div className="status">
            {isOvering ? (
              <input
                type="text"
                size="7"
                onChange={onTimeChange}
                value={props.timestamp}
              />
            ) : (
              <span>{props.timestamp}</span>
            )}

            {
              <img
                src={mapImageStatus[props.status]}
                alt="sending"
                height="20"
              />
            }
          </div>
        </div>
        {isOvering ? (
          <div className="status-popover">
            <img
              src={sending}
              alt="sending"
              width="20"
              status={STATUS_SENDING}
              onClick={onStatusClick}
              className={props.status === STATUS_SENDING ? "selected" : ""}
            />
            <img
              src={sent}
              alt="sent"
              width="20"
              status={STATUS_SENT}
              className={props.status === STATUS_SENT ? "selected" : ""}
              onClick={onStatusClick}
            />
            <img
              src={read}
              alt="read"
              width="30"
              status={STATUS_READ}
              className={props.status === STATUS_READ ? "selected" : ""}
              onClick={onStatusClick}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ChatElementRight;
