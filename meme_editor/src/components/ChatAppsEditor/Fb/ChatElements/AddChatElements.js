import React from "react";
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
        <div className="all-text is-top is-bottom">
          <AddCircle
            className="fa fa-plus-circle"
            style={{
              color: props.side === "left" ? blue[500] : "white",
              fontSize: "100px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatElementRight;
