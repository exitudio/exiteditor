import React from "react";
import lumpRight from "../../images/lump-right.png";
import lumpLeft from "../../images/lump-left.png";
import { openUploadImage, onPaste } from "utils";

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
        <label className="profile-wraper">
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
