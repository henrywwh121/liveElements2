import { useDispatch, useSelector } from "react-redux";
import { addElement } from "../features/elementsSlice";
import { Tools } from "../components/Tools/ToolsConstants";
import { setIsDragging } from "../features/designSlice";
import { ToolsAttributes } from "../components/Tools/ToolsConstants";

const useDropImage = (path, canvasOffSetX, canvasOffSetY, scale) => {
  const dispatch = useDispatch();
  const isDragging = useSelector((state) => state.design.isDragging);
  const elementOrder = useSelector((state) => state.elements.elementOrder);

  const dropImage = ({ nativeEvent }) => {
    if (!isDragging) {
      return;
    }

    nativeEvent.preventDefault();
    nativeEvent.stopPropagation();

    dispatch(
      addElement({
        id: "IMAGE-" + elementOrder,
        path: path.src,
        type: Tools.IMAGE,
        startX: (nativeEvent.clientX - canvasOffSetX) / scale,
        startY: (nativeEvent.clientY - canvasOffSetY) / scale,
        width: ToolsAttributes.IMGWIDTH,
        height: (ToolsAttributes.IMGWIDTH / path.width) * path.height,
        order: elementOrder,
        translate: "translate(0px,0px)",
      })
    );

    dispatch(setIsDragging(false));
  };

  return { dropImage };
};

export default useDropImage;
