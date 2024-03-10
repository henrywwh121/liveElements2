import { useEffect, useState, useRef, useLayoutEffect } from "react";

const MINSCALE = 0.1;
const MAXSCALE = 0.5;
const MINWIDTH = 300;

const Canvas = () => {
  const [initialWidth, setInitialWidth] = useState(null);
  const [scale, setScale] = useState(MAXSCALE);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef || !containerRef.current) return;
    const { width, height } = containerRef.current.getBoundingClientRect();
    setInitialWidth(width);
    const resizeObserver = new ResizeObserver(() => {
      const { width, height } = containerRef.current.getBoundingClientRect();
      console.log(width, height);
      if (width / height < 16 / 9) {
        const calcScale =
          ((width - MINWIDTH) / (initialWidth - MINWIDTH)) *
            (MAXSCALE - MINSCALE) +
          MINSCALE;
        setScale(calcScale);
      } else {
        setScale(MAXSCALE);
      }
    });
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [containerRef, initialWidth]);

  return (
    <div className="flex-1 relative" ref={containerRef}>
      <div
        style={{ transform: `scale(${scale})` }}
        className="w-full h-full flex justify-center items-center"
      >
        <canvas
          className={`bg-[#00ff00] h-[1080px] w-[1920px] absolute`}
        ></canvas>
      </div>
    </div>
  );
};

export default Canvas;
