import { useRef, useEffect } from "react";
export default function useDidUpdate(fn, inputs) {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) fn();
    else didMountRef.current = true;
  }, [fn]);
}
