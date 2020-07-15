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
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const StatusPopup = (props) => {
  const ref = useRef(null);
  useClickOutside(ref, props.close);
  return (
    <div ref={ref}>
      <div className="status-popover">
        <ButtonGroup
          orientation="vertical"
          color="primary"
          aria-label="vertical outlined primary button group"
        >
          <Button
            onClick={() => props.onStatusClick(STATUS_SENDING)}
            variant={props.status === STATUS_SENDING ? "contained" : "outlined"}
          >
            <img src={sending} alt="sending" width="20" />
          </Button>
          <Button
            onClick={() => props.onStatusClick(STATUS_SENT)}
            variant={props.status === STATUS_SENT ? "contained" : "outlined"}
          >
            <img src={sent} alt="sent" width="20" />
          </Button>
          <Button
            onClick={() => props.onStatusClick(STATUS_READ)}
            variant={props.status === STATUS_READ ? "contained" : "outlined"}
          >
            <img src={read} alt="read" width="30" />
          </Button>
        </ButtonGroup>
        {/* <img
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
        /> */}
      </div>
    </div>
  );
};

export default StatusPopup;
