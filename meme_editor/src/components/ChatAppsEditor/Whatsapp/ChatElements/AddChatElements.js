import React from "react";
import lumpRight from "../images/lump-right.png";
import lumpLeft from "../images/lump-left.png";
import AddCircle from "@material-ui/icons/AddCircle";
import { blue } from "@material-ui/core/colors";

const ChatElementRight = (props) => {
  return (
    <div className={`chat-element add ${props.side}`}>
      <div className="text-wrapper">
        {props.side === "left" ? (
          <img src={lumpLeft} alt="lump-left" className="lump" />
        ) : (
          <img src={lumpRight} alt="lump-right" className="lump" />
        )}
        <div className="all-text">
          <AddCircle
            className="fa fa-plus-circle"
            style={{ color: blue[500], fontSize: "100px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatElementRight;
