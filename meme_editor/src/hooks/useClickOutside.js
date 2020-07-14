import { useEffect } from "react";

export default function useClickOutSide(ref, callback) {
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });
}
