import React from "react";

export const LumpRight = (props) => {
  return (
    <div className={props.className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 8 13"
        width="16" // double size
        height="26" // double size
      >
        <path
          opacity=".13"
          d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"
        ></path>
        <path
          fill="currentColor"
          d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"
        ></path>
      </svg>
    </div>
  );
};

export const LumpLeft = (props) => {
  return (
    <div className={props.className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 8 13"
        width="16"
        height="26"
      >
        <path
          opacity=".13"
          fill="#0000000"
          d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"
        ></path>
        <path
          fill="currentColor"
          d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"
        ></path>
      </svg>
    </div>
  );
};
export const Waiting = () => {
  return (
    <svg
      className="sending-color"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 15"
      width="32"
      height="30"
    >
      <path
        fill="currentColor"
        d="M9.75 7.713H8.244V5.359a.5.5 0 0 0-.5-.5H7.65a.5.5 0 0 0-.5.5v2.947a.5.5 0 0 0 .5.5h.094l.003-.001.003.002h2a.5.5 0 0 0 .5-.5v-.094a.5.5 0 0 0-.5-.5zm0-5.263h-3.5c-1.82 0-3.3 1.48-3.3 3.3v3.5c0 1.82 1.48 3.3 3.3 3.3h3.5c1.82 0 3.3-1.48 3.3-3.3v-3.5c0-1.82-1.48-3.3-3.3-3.3zm2 6.8a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2v-3.5a2 2 0 0 1 2-2h3.5a2 2 0 0 1 2 2v3.5z"
      ></path>
    </svg>
  );
};
export const DoubleTicks = () => {
  return (
    <svg
      className="sent-color"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 15"
      width="32"
      height="30"
    >
      <path
        fill="currentColor"
        d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
      ></path>
    </svg>
  );
};
export const SingleTick = () => {
  return (
    <svg
      className="sending-color"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 15"
      width="32"
      height="30"
    >
      <path
        fill="currentColor"
        d="M10.91 3.316l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
      ></path>
    </svg>
  );
};