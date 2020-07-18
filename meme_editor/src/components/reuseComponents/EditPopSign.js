import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import "./EditPopSign.scss";
import Fab from "@material-ui/core/Fab";

function EditPopSign({ className, style }) {
  className = className ? className : "top";
  style = style ? style : {};
  return (
    <div style={{ position: "relative" }} data-remove-from-image>
      <div
        className={`edit-pop-sign ${className}`}
        style={{ ...style }}
        contentEditable={false}
      >
        <Fab color="primary" aria-label="edit" size="small">
          <EditIcon />
        </Fab>
      </div>
    </div>
  );
}
export default EditPopSign;
