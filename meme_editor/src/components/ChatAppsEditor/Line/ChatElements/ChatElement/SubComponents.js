import React from "react";
import lumpRight from "../../images/lump-right.png";
import lumpLeft from "../../images/lump-left.png";
import { openUploadImage } from "utils";

// for prevent pasting style
export const onPaste = (e) => {
  e.preventDefault();
  // get text representation of clipboard
  var text = (e.originalEvent || e).clipboardData.getData("text/plain");
  // insert text manually
  document.execCommand("insertHTML", false, text);
};

const contentEditable = {
  contentEditable: "true",
  suppressContentEditableWarning: true,
  onPaste: onPaste,
};

export const StatusElement = ({ side }) => {
  return (
    <div>
      <div {...contentEditable} className={`text-status ${side}`}>
        {side === "right" ? "Read" : "   "}
      </div>
      <div {...contentEditable} className="text-status">
        9.12 AM
      </div>
    </div>
  );
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

export const Lump = ({ side, showProfile }) => {
  if (showProfile) {
    if (side === "left") {
      return <img src={lumpLeft} alt="lump-left" className="lump" />;
    } else {
      return <img src={lumpRight} alt="lump-right" className="lump" />;
    }
  } else {
    return null;
  }
};
