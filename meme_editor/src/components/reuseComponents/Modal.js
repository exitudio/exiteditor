import React from "react";
import "./Modal.scss";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";

function Modal(props) {
  return (
    <div style={{ display: props.show ? "block" : "none" }}>
      <div className="modal-wrap">
        <div className="content-modal">
          <header>
            <Button onClick={props.onCancel}>
              <CloseIcon />
            </Button>
          </header>
          <div className="body">{props.children}</div>
          <footer>
            <Button
              variant="contained"
              color="secondary"
              onClick={props.onCancel}
            >
              Close
            </Button>
            <Button variant="contained" color="primary" onClick={props.onSave}>
              Save
            </Button>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Modal;
