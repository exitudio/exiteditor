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

export const StatusElement = (props) => {
  return props.side === props.show ? (
    <div>
      <div {...contentEditable} className={`text-status ${props.side}`}>
        {props.side === "right" ? "Read" : "   "}
      </div>
      <div {...contentEditable} className="text-status">
        9.12 AM
      </div>
    </div>
  ) : null;
};

export const Profile = ({
  side,
  showProfile,
  setProfileImage,
  src,
}) => {
  if (side === "left" && showProfile) {
    const onChange = (e) => {
      openUploadImage(e, (fileReader) => {
        setProfileImage(fileReader.result);
      });
    };
    return (
      <label>
        <img src={src} alt="img" className="profile" />;
        <input type="file" className="disable" onChange={onChange} />
      </label>
    );
  } else {
    return <div className="dummy-profile-wrapper"></div>;
  }
};

export const Lump = (props) => {
  if (props.showProfile) {
    if (props.side === "left") {
      return <img src={lumpLeft} alt="lump-left" className="lump" />;
    } else {
      return <img src={lumpRight} alt="lump-right" className="lump" />;
    }
  } else {
    return null;
  }
};
