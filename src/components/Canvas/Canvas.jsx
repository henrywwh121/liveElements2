import { useEffect, useState, useRef, useLayoutEffect } from "react";

const MINSCALE = 0.1;
const MAXSCALE = 0.6;
const MINWIDTH = 300;

const Canvas = () => {
  const [scale, setScale] = useState(MAXSCALE);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef || !containerRef.current) return;
    const resizeObserver = new ResizeObserver(() => {
      const { width, height } = containerRef.current.getBoundingClientRect();
      console.log(width, height);
      if (width / height < 16 / 9) {
        const calcScale =
          ((width - MINWIDTH) / (1600 - MINWIDTH)) * (MAXSCALE - MINSCALE) +
          MINSCALE;
        setScale(calcScale);
      } else {
        setScale(MAXSCALE);
      }
    });
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [containerRef]);

  return (
    <div
      className="flex-1 relative flex justify-center items-center"
      ref={containerRef}
    >
      <div
        style={{ transform: `scale(${scale})` }}
        className="h-[1080px] w-[1920px] absolute"
      >
        <canvas
          className={`bg-[#00ff00] h-[1080px] w-[1920px] absolute`}
        ></canvas>
        <div className="bg-sky-600 h-[150px] w-[150px] absolute top-0 left-0"></div>
      </div>
    </div>
  );
};

export default Canvas;
