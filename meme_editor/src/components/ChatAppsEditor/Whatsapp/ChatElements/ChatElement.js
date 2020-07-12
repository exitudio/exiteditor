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
          <div>
            เออ เห็นเพื่อนมึงตอบว่าเอเจนซี่พวกนี้ยาก ไม่แน่ใจว่าเข้าใจผิดป่าว
            กูหมายถึงเอเจนซี่ส่งเดียวกูไปสัมภาษณ์หลาย client บางอันสัมภาษณ์
            online แค่ชม
          </div>
          <div className="status">
            <span>9.12 AM</span>
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
