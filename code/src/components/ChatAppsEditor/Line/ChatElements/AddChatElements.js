import React from "react";
import lumpRight from "../images/lump-right.png";
import lumpLeft from "../images/lump-left.png";
import AddCircle from "@material-ui/icons/AddCircle";
import { blue } from "@material-ui/core/colors";
import { useDispatch } from "react-redux";
import { addChat } from "redux/chatApps/chatAppsActions";

const ChatElementRight = (props) => {
  const dispatch = useDispatch();
  const onClick = () => dispatch(addChat(props.side));
  return (
    <div
      className={`chat-element add ${props.side}`}
      onClick={onClick}
      data-remove-from-image
    >
      <div className="text-wrapper">
        <div className="all-text">
          {props.side === "left" ? (
            <img src={lumpLeft} alt="lump-left" className="lump" />
          ) : (
            <img src={lumpRight} alt="lump-right" className="lump" />
          )}
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
