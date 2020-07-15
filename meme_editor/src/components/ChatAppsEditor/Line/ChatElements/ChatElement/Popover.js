import React, { useRef } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import useClickOutside from "hooks/useClickOutside";
import { openUploadImage } from "utils";

const ChildPopover = (props) => {
  const ref = useRef(null);
  useClickOutside(ref, props.close);
  const toggleShowProfile = () => {
    props.setShowProfile(!props.showProfile);
    props.close();
  };
  const onChange = (e) => {
    props.close();
    openUploadImage(e, (fileReader) => {
      props.setProfileImage(fileReader.result);
      props.setShowProfile(true);
    });
  };
  return (
    <div ref={ref} className="popover">
      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical outlined primary button group"
      >
        <Button color="primary" component="label">
          load profile image
          <input type="file" onChange={onChange} />
        </Button>
        <Button onClick={toggleShowProfile}>
          {props.showProfile ? "Hide" : "Show"}
        </Button>
      </ButtonGroup>
    </div>
  );
};
const Popover = (props) => {
  return props.show ? <ChildPopover {...props} /> : null;
};

export default Popover;
