import React, { useRef, useEffect, useState } from "react";

export default function ScaleComponent(props) {
  const percentScaleString = ((1 - props.scale) / 2 / props.scale) * 100 + "%";
  const upScale = 1 / props.scale;

  const ref = useRef(null);
  const [size, setSize] = useState({ width: "auto", height: "auto" });
  useEffect(() => {
    const rect = ref.current.getBoundingClientRect();
    setSize({ width: rect.width, height: rect.height });
  }, []);
  const scaleSize = ref.current
    ? { width: size.width * upScale, height: size.height * upScale }
    : { width: "auto", height: "auto" };
  return (
    <div style={{ width: size.width, height: size.height }}>
      <div
        style={{
          width: scaleSize.width,
          height: scaleSize.height,
          transform: `scale(${props.scale}) translateX(-${percentScaleString}) translateY(-${percentScaleString})`,
        }}
      >
        <div ref={ref}>{props.children}</div>
      </div>
    </div>
  );
}
