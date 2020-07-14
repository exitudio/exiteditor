import React, { useRef } from "react";
import {
  STATUS_SENDING,
  STATUS_SENT,
  STATUS_READ,
} from "constants/chatConstant";
import sending from "../images/sending.png";
import sent from "../images/sent.png";
import read from "../images/read.png";
import useClickOutside from "hooks/useClickOutside";

const StatusPopup = (props) => {
  const ref = useRef(null);
  useClickOutside(ref, props.close);
  return (
    <div ref={ref}>
      <div className="status-popover">
        <img
          src={sending}
          alt="sending"
          width="20"
          status={STATUS_SENDING}
          onClick={props.onStatusClick}
          className={props.status === STATUS_SENDING ? "selected" : ""}
        />
        <img
          src={sent}
          alt="sent"
          width="20"
          status={STATUS_SENT}
          className={props.status === STATUS_SENT ? "selected" : ""}
          onClick={props.onStatusClick}
        />
        <img
          src={read}
          alt="read"
          width="30"
          status={STATUS_READ}
          className={props.status === STATUS_READ ? "selected" : ""}
          onClick={props.onStatusClick}
        />
      </div>
    </div>
  );
};

export default StatusPopup;
