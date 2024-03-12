import { useState, useLayoutEffect } from "react";
import useWindowDimensions from "./useWindowDimensions";

const useBoundingClientRect = (elementRef, scale) => {
  const [rect, setRect] = useState(null);
  const windowDimensions = useWindowDimensions();

  useLayoutEffect(() => {
    const updateRect = () => {
      if (!elementRef || !elementRef.current) return;
      setTimeout(() => {
        setRect(elementRef.current.getBoundingClientRect());
      });
    };

    updateRect();

    const resizeObserver = new ResizeObserver(updateRect);
    resizeObserver.observe(elementRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [elementRef, windowDimensions, scale]);

  return rect;
};

export default useBoundingClientRect;
