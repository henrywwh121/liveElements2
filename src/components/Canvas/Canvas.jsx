import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Moveable from "react-moveable";
import Selecto from "react-selecto";

import RenderElements from "./RenderElements";

import useBoundingClientRect from "../../hooks/useBoundingClientRect";
import useWriteText from "../../hooks/useWriteText";

import { canvasMouseDown } from "./canvasMouseEvents";
import { moveableResize, targetCount, targetsHasType } from "./moveableEvents";

import { Tools } from "../Tools/ToolsConstants";

import { setSelectedElements } from "../../features/elementsSlice";

const MINSCALE = 0.1;
const MAXSCALE = 1;
const INITSCALE = 0.4;

const MINWIDTH = 300;
const MINHEIGHT = 300;

const Canvas = () => {
  const dispatch = useDispatch();
  const [scale, setScale] = useState(INITSCALE);
  const [targets, setTargets] = useState([]);
  //const [elementsList, setElementsList] = useState([]);

  const mode = useSelector((state) => state.design.mode);

  const containerRef = useRef(null);
  const selectoRef = useRef(null);
  const moveableRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!containerRef || !containerRef.current) return;
    const resizeObserver = new ResizeObserver(() => {
      const { width, height } = containerRef.current.getBoundingClientRect();
      if (width > MINWIDTH && height > MINHEIGHT) {
        const calcScale = Math.min(
          ((width - MINWIDTH) / (1920 - MINWIDTH)) * (MAXSCALE - MINSCALE) +
            MINSCALE,
          ((height - MINHEIGHT) / (1080 - MINHEIGHT)) * (MAXSCALE - MINSCALE) +
            MINSCALE
        );
        setScale(Math.abs(calcScale));
      } else {
        setScale(MINSCALE);
      }
    });
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [containerRef]);

  const canvasRect = useBoundingClientRect(canvasRef, scale);
  const { getTextBox } = useWriteText(
    canvasRect?.x,
    canvasRect?.y,
    scale,
    targets
  );

  return (
    <div
      className="flex-1 flex justify-center items-center selectableArea relative"
      ref={containerRef}
    >
      <div
        style={{ transform: `scale(${scale})` }}
        className="h-[1080px] w-[1920px] absolute"
      >
        <canvas
          className={`bg-[#00ff00] h-[1080px] w-[1920px] absolute`}
          ref={canvasRef}
          onMouseDown={canvasMouseDown(getTextBox, mode)}
        ></canvas>
        <RenderElements moveableRef={moveableRef} />
        <div className="bg-sky-600 h-[150px] w-[150px] absolute bottom-0 left-0 target"></div>
        <div className="bg-sky-600 h-[150px] w-[150px] absolute bottom-0 right-5 target"></div>
      </div>

      <Moveable
        ref={moveableRef}
        target={targets}
        draggable={mode == Tools.SELECT}
        resizable={true}
        verticalGuidelines={[canvasRect?.x - 360, canvasRect?.right - 360]}
        horizontalGuidelines={[canvasRect?.y - 100, canvasRect?.bottom - 100]}
        keepRatio={targetCount(targets)}
        snappable={true}
        onClickGroup={(e) => {
          selectoRef.current.clickTarget(e.inputEvent, e.inputTarget);
        }}
        onDragGroup={(e) => {
          e.events.forEach((ev) => {
            ev.target.style.transform = ev.transform;
          });
        }}
        onResizeGroup={(e) => {
          e.events.forEach((ev) => {
            moveableResize(ev, targets);
          });
        }}
        onDrag={(e) => {
          e.target.style.transform = e.transform;
        }}
        onResize={(e) => {
          moveableResize(e, targets);
        }}
        onRotate={(e) => {
          e.target.style.transform = e.drag.transform;
        }}
      />
      <Selecto
        ref={selectoRef}
        dragContainer={".selectableArea"}
        selectableTargets={[".target"]}
        hitRate={0}
        selectByClick={true}
        selectFromInside={false}
        toggleContinueSelect={["shift"]}
        ratio={0}
        keyContainer={window}
        onDragStart={(e) => {
          const target = e.inputEvent.target;
          if (
            moveableRef.current.isMoveableElement(target) ||
            targets.some((t) => t === target || t.contains(target))
          ) {
            e.stop();
          }
        }}
        onSelectEnd={(e) => {
          if (e.isDragStartEnd) {
            e.inputEvent.preventDefault();
            moveableRef.current.waitToChangeTarget().then(() => {
              moveableRef.current.dragStart(e.inputEvent);
            });
          }
          setTargets(e.selected);
          dispatch(setSelectedElements(e.selected));
        }}
      />
    </div>
  );
};

export default Canvas;
