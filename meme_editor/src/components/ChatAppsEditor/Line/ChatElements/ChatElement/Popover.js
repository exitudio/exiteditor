import React, { useRef } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import useClickOutside from "hooks/useClickOutside";

const ChildPopover = (props) => {
  const ref = useRef(null);
  useClickOutside(ref, props.close);
  const toggleShowProfile = () => {
    props.setShowProfile(!props.showProfile);
    props.close();
  };
  const onChange = (e) => {
    props.close();
    const target = e.target || window.event.srcElement;
    const files = target.files;
    
    if (FileReader && files && files.length) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        props.setProfileImage(fileReader.result);
        props.setShowProfile(true);
      };
      fileReader.readAsDataURL(files[0]);
    }
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
