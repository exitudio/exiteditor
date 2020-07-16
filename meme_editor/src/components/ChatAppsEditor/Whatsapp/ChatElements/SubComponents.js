import React from "react";
import lumpRight from "../images/lump-right.png";
import lumpLeft from "../images/lump-left.png";

export function Lump({ side, isPrimary }) {
  if (isPrimary) {
    if (side === "left") {
      return <img src={lumpLeft} alt="lump-left" className="lump" />;
    } else {
      return <img src={lumpRight} alt="lump-right" className="lump" />;
    }
  }
  return null;
}
