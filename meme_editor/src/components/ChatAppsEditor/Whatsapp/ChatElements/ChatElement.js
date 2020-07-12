import React, { useState } from "react";
import lumpRight from "../images/lump-right.png";
import lumpLeft from "../images/lump-left.png";
import sending from "../images/sending.png";
import sent from "../images/sent.png";
import read from "../images/read.png";

const ChatElementRight = (props) => {
  const [isOvering, changeOver] = useState(false);
  return (
    <div
      className={`chat-element ${props.side}`}
      onMouseEnter={() => changeOver(true)}
      onMouseLeave={() => changeOver(false)}
    >
      <div className="text-wrapper">
        {props.side === "left" ? (
          <img src={lumpLeft} alt="lump-left" className="lump" />
        ) : (
          <img src={lumpRight} alt="lump-right" className="lump" />
        )}
        <div className="all-text">
          {isOvering ? (
            <textarea
              name="send-text"
              rows="4"
              cols="20"
              placeholder="send text"
            ></textarea>
          ) : (
            <div>
              เออ เห็นเพื่อนมึงตอบว่าเอเจนซี่พวกนี้ยาก ไม่แน่ใจว่าเข้าใจผิดป่าว
              กูหมายถึงเอเจนซี่ส่งเดียวกูไปสัมภาษณ์หลาย client บางอันสัมภาษณ์
              online แค่ชม
            </div>
          )}
          <div className="status">
            {isOvering ? (
              <input type="text" value="9.12 AM" size="7" />
            ) : (
              <span>9.12 AM</span>
            )}
            <img src={sending} alt="sending" height="20" />
          </div>
        </div>
        {isOvering ? (
          <div className="status-popover">
            <img src={sending} alt="sending" width="20" />
            <img src={sent} alt="sent" width="20" className="select"/>
            <img src={read} alt="read" width="30" />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ChatElementRight;
