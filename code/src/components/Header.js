import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import appIcon from "./images/app-icon.png";
import domtoimage from "dom-to-image";

import { Link, useRouteMatch } from "react-router-dom";
import Modal from "./reuseComponents/Modal";

export default function Header() {
  const [isOpening, setOpen] = useState(false);
  const [saveHref, setSaveHref] = useState("#");
  const onPreviewClick = () => {
    window.ga("send", "event", {
      eventCategory: "Preview",
      eventAction: "Open",
    });
    const rootImage = document.getElementById("root-image");
    const disableElements = document.querySelectorAll(
      '[data-remove-from-image="true"]'
    );
    for (let i = 0; i < disableElements.length; i++) {
      disableElements[i].style.display = "none";
    }
    // const disableStyleElements = document.querySelectorAll(
    //   "[data-remove-style]"
    // );
    // for (let i = 0; i < disableStyleElements.length; i++) {
    //   const disableStyle = disableStyleElements[i].getAttribute(
    //     "data-remove-style"
    //   );
    //   disableStyleElements[i].style[disableStyle] = "unset";
    // }

    domtoimage
      .toJpeg(rootImage)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        img.style["max-height"] = "calc(100vh - 300px)";
        document.getElementById("preview-image").appendChild(img);
        for (let i = 0; i < disableElements.length; i++) {
          disableElements[i].style.display = "unset";
        }
        setSaveHref(dataUrl);
      })
      .catch(function (error) {
        window.ga("send", "event", {
          eventCategory: "Preview",
          eventAction: "Error",
        });
        console.error("oops, something went wrong!", error);
      });
    setOpen(true);
  };
  const onClose = () => {
    window.ga("send", "event", {
      eventCategory: "Preview",
      eventAction: "Close",
    });
    setOpen(false);
    const previewImage = document.getElementById("preview-image");
    previewImage.removeChild(previewImage.firstChild);
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
        show={isOpening}
        onCancel={onClose}
        saveHref={saveHref}
        onSave={onSave}
      >
        <div id="preview-image" />
      </Modal>
    </AppBar>
  );
}
