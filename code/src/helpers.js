import domtoimage from "dom-to-image";

export const snapShot = (div, onComplete) => {
  const rootImage = document.getElementById(div);
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
      onComplete(dataUrl);
    })
    .catch(function (error) {
      window.ga("send", "event", {
        eventCategory: "Preview",
        eventAction: "Error" + error,
      });
      console.error("oops, something went wrong!", error);
    });
};

export const getElementIndexById = (elements, id) => {
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].id === id) {
      return i;
    }
  }
};

export const isGroupFromElements = (elements) => {
  for (let element of elements) {
    if (element.isNewReplyProfile) {
      return true;
    }
  }
  return false;
};
