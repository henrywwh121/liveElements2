import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addElement } from "../features/elementsSlice";
import { ToolsAttributes } from "../components/Tools/ToolsConstants";
import { Tools } from "../components/Tools/ToolsConstants";

const useDrawRectangle = (canvasOffSetX, canvasOffSetY, scale) => {
  const dispatch = useDispatch();
  const [isDrawing, setIsDrawing] = useState(false);
  const elementOrder = useSelector((state) => state.elements.elementOrder);

  const startX = useRef(null);
  const startY = useRef(null);
  const width = useRef(null);
  const height = useRef(null);

  const startDrawingRectangle = ({ nativeEvent }) => {
    width.current = 0;
    height.current = 0;

    setIsDrawing(true);
    nativeEvent.preventDefault();
    nativeEvent.stopPropagation();
    startX.current = nativeEvent.clientX - canvasOffSetX;
    startY.current = nativeEvent.clientY - canvasOffSetY;
  };

  const drawRectangle = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    //nativeEvent.preventDefault();
    //nativeEvent.stopPropagation();
    const newMouseX = nativeEvent.clientX - canvasOffSetX;
    const newMouseY = nativeEvent.clientY - canvasOffSetY;

    width.current = newMouseX - startX.current;
    height.current = newMouseY - startY.current;

    width.current = Math.abs(width.current);
    height.current = Math.abs(height.current);

    if (newMouseX < startX.current) {
      startX.current = newMouseX;
    }

    if (newMouseY < startY.current) {
      startY.current = newMouseY;
    }
  };

  const stopDrawingRectangle = () => {
    setIsDrawing(false);
    if (width.current == 0) {
      return;
    }

    dispatch(
      addElement({
        id: "RECT-" + elementOrder,
        type: Tools.RECTANGLE,
        startX: startX.current / scale,
        startY: startY.current / scale,
        width: width.current / scale,
        height: height.current / scale,
        backgroundColor: ToolsAttributes.BACKGROUNDCOLOR,
      })
    );
  };

  return { startDrawingRectangle, stopDrawingRectangle, drawRectangle };
};

export default useDrawRectangle;
