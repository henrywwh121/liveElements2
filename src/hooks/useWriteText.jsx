import { Tools } from "../components/Tools/ToolsConstants";
import { ToolsAttributes } from "../components/Tools/ToolsConstants";
import { useDispatch, useSelector } from "react-redux";
import { addElement } from "../features/elementsSlice";

const useWriteText = (canvasOffSetX, canvasOffSetY, scale) => {
  const dispatch = useDispatch();
  const elementOrder = useSelector((state) => state.elements.elementOrder);

  const getTextBox = ({ nativeEvent }) => {
    nativeEvent.preventDefault();
    nativeEvent.stopPropagation();
    dispatch(
      addElement({
        id: "TEXT-" + elementOrder,
        type: Tools.TEXT,
        startX: (nativeEvent.clientX - canvasOffSetX) / scale,
        startY: (nativeEvent.clientY - canvasOffSetY) / scale,
        fontSize: ToolsAttributes.INITFONTSIZE,
        width: ToolsAttributes.TEXTWIDTH,
        height: ToolsAttributes.TEXTHEIGHT,
        lineHeight: ToolsAttributes.LINEHEIGHT,
        color: ToolsAttributes.COLOR,
        order: elementOrder,
        fontWeight: ToolsAttributes.FONTWEIGHT,
        text: ToolsAttributes.TEXT,
      })
    );
  };

  return { getTextBox };
};

export default useWriteText;
