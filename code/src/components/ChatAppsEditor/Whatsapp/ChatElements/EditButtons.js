import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { useDispatch } from "react-redux";
import { toggleNewReplyProfile } from "../../../../redux/chatApps/chatAppsActions";

function EditButtons({ onDelete, chatElement, side }) {
  const dispatch = useDispatch();
  return (
    <>
      <Tooltip title="Delete">
        <Fab
          color="secondary"
          onClick={onDelete}
          style={{ margin: "10px 10px 2px 10px", flexShrink: 0 }}
          data-remove-from-image
        >
          <DeleteIcon style={{ width: 40, height: 40, color: "white" }} />
        </Fab>
      </Tooltip>
      {side === "left" ? (
        <Tooltip title="Set as New Reply Profile">
          <Fab
            color={`${chatElement.isNewReplyProfile ? "primary" : "default"}`}
            onClick={() => dispatch(toggleNewReplyProfile(chatElement.id))}
            style={{ margin: "10px 10px 2px 10px", flexShrink: 0 }}
            data-remove-from-image
          >
            <SupervisedUserCircleIcon
              style={{ width: 50, height: 50, color: "white" }}
            />
          </Fab>
        </Tooltip>
      ) : null}
    </>
  );
}

export default EditButtons;
