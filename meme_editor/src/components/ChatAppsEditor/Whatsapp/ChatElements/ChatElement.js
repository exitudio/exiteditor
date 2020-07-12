import React from "react";
import { LumpRight, LumpLeft, Waiting, DoubleTicks, SingleTick } from "./Svg";

const ChatElementRight = (props) => {
  return (
    <div className={`chat-element ${props.side}`}>
      <div className="text-wrapper">
        {props.side === "left" ? (
          <LumpLeft className="lump" />
        ) : (
          <LumpRight className="lump" />
        )}
        <div className="all-text">
          {props.text ? (
            <div>
              เออ เห็นเพื่อนมึงตอบว่าเอเจนซี่พวกนี้ยาก ไม่แน่ใจว่าเข้าใจผิดป่าว
              กูหมายถึงเอเจนซี่ส่งเดียวกูไปสัมภาษณ์หลาย client บางอันสัมภาษณ์
              online แค่ชม
            </div>
          ) : (
            <textarea
              name="send-text"
              rows="4"
              cols="20"
              placeholder="send text"
            ></textarea>
          )}
          <div className="status">
            <span>9.12 AM</span>
            <input type="text" value="9.12 AM" size="7"/>
            <Waiting />
            <DoubleTicks />
            <SingleTick />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatElementRight;
