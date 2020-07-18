import React from "react";
import { openUploadImage } from "utils";

export const Profile = ({ setProfileImage, src }) => {
  const onChange = (e) => {
    openUploadImage(e, (fileReader) => {
      setProfileImage(fileReader.result);
    });
  };
  return (
    <label>
      <img src={src} alt="img" className="profile" />
      <input type="file" className="disable" onChange={onChange} />
    </label>
  );
};
