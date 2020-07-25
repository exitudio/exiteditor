import React from "react";
import { openUploadImage } from "utils";

export const Profile = ({ setProfileImage, src, showProfile }) => {
  const onChange = (e) => {
    openUploadImage(e, (fileReader) => {
      setProfileImage(fileReader.result);
    });
  };

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
};
