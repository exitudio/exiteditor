import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import appIcon from "./images/app-icon.png";
import { Link, useRouteMatch, useLocation, useHistory } from "react-router-dom";
import Modal from "./reuseComponents/Modal";
import { snapShot } from "../helpers";

export default function Header() {
  const [isStateOpening, setStateOpen] = useState(false);
  const [saveHref, setSaveHref] = useState("#");
  const location = useLocation();
  const history = useHistory();

  const setOpen = (isOpening) => {
    setStateOpen(isOpening);
    if (isOpening) {
      history.push(location.pathname + "/preview");
    } else {
      const popPreview = location.pathname.split("/preview")[0];
      history.push(popPreview);
      const previewImage = document.getElementById("preview-image");
      previewImage.removeChild(previewImage.firstChild);
    }
  };
  const onPreviewClick = () => {
    snapShot("root-image", (dataUrl) => setSaveHref(dataUrl));
    setOpen(true);
  };
  const onClose = () => {
    window.ga("send", "event", {
      eventCategory: "Preview",
      eventAction: "Close",
    });
    setOpen(false);
  };
  const onSave = () => {
    window.ga("send", "event", {
      eventCategory: "Preview",
      eventAction: "Save",
    });
    setOpen(false);
  };
  const match = useRouteMatch();

  return (
    <AppBar position="static">
      <Toolbar>
        <Button component={Link} to="/">
          <img src={appIcon} alt="app" className="app-icon" />
          <Typography style={{ marginTop: 5, color: "white" }}>
            Chat Editor
          </Typography>
        </Button>
        <div className="flex-grow-1"></div>
        {!match.isExact ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={onPreviewClick}
          >
            Preview & Save
          </Button>
        ) : null}
      </Toolbar>
      <Modal
        show={isStateOpening}
        onCancel={onClose}
        saveHref={saveHref}
        onSave={onSave}
      >
        <div id="preview-image" />
      </Modal>
    </AppBar>
  );
}
