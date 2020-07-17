import React from "react";
import { openUploadImage } from "utils";

// for prevent pasting style
export const onPaste = (e) => {
  e.preventDefault();
  // get text representation of clipboard
  var text = (e.originalEvent || e).clipboardData.getData("text/plain");
  // insert text manually
  document.execCommand("insertHTML", false, text);
};

export const Profile = ({ side, showProfile, setProfileImage, src }) => {
  const onChange = (e) => {
    openUploadImage(e, (fileReader) => {
      setProfileImage(fileReader.result);
    });
  };
  if (side === "left") {
    if (showProfile) {
      return (
        <label>
          <img src={src} alt="img" className="profile" />
          <input type="file" className="disable" onChange={onChange} />
        </label>
      );
    } else {
      return <div className="dummy-profile-wrapper"></div>;
    }
  } else {
    return null;
  }
};
