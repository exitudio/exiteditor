import React, { useState, forwardRef } from "react";
import { contentEditableProps } from "../../utils";

function ContentEditableComponent({ className, defaultValue = "" }, ref) {
  const [sendingText, setSendingText] = useState(defaultValue);
  const onTextSendingChange = (e) => {
    setSendingText(e.currentTarget.textContent);
  };
  return (
    <div
      className={className}
      ref={ref}
      onInput={onTextSendingChange}
      onBlur={onTextSendingChange}
      {...contentEditableProps}
    >
      {sendingText}
    </div>
  );
}
export default forwardRef(ContentEditableComponent);
