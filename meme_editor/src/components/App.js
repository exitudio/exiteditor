import React, { useState } from "react";
import ChatAppsEditor from "./ChatAppsEditor";
import "./App.scss";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Modal from "./reuseComponents/Modal";

import domtoimage from "dom-to-image";

function App() {
  const [isOpening, setOpen] = useState(false);
  const onPreviewClick = () => {
    const rootImage = document.getElementById("root-image");
    rootImage.style.cssText = "transform: unset;";
    const disableElements = document.querySelectorAll(
      '[data-remove-from-image="true"]'
    );
    for (let i = 0; i < disableElements.length; i++) {
      disableElements[i].style.display = "none";
    }

    domtoimage
      .toJpeg(rootImage)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        img.style["max-height"] = "600px";
        rootImage.style.cssText = "transform: transform: scale(0.5);";
        document.getElementById("preview-image").appendChild(img);
        for (let i = 0; i < disableElements.length; i++) {
          disableElements[i].style.display = "unset";
        }
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
    const previewImage = document.getElementById("preview-image");
    previewImage.removeChild(previewImage.firstChild);
  };
  return (
    <div className="flex-grow-1">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className="flex-grow-1">
            Editor
          </Typography>
          <Button color="inherit" onClick={onPreviewClick}>
            Preview & Save
          </Button>
        </Toolbar>
      </AppBar>
      <ChatAppsEditor />
      <Modal show={isOpening} onCancel={onClose}>
        <div id="preview-image" />
      </Modal>
    </div>
  );
}

export default App;
