import { Tools } from "../components/Tools/ToolsConstants";
import { ToolsAttributes } from "../components/Tools/ToolsConstants";

const useWriteText = (canvasOffSetX, canvasOffSetY, setElementsList, scale) => {
  const getTextBox = ({ nativeEvent }) => {
    nativeEvent.preventDefault();
    nativeEvent.stopPropagation();
    setElementsList((prev) => {
      return [
        ...prev,
        {
          id: "TEXT" + prev.length,
          type: Tools.TEXT,
          startX: (nativeEvent.clientX - canvasOffSetX) / scale,
          startY: (nativeEvent.clientY - canvasOffSetY) / scale,
          fontSize: ToolsAttributes.INITFONTSIZE,
          width: ToolsAttributes.TEXTWIDTH,
        },
      ];
    });
  };

  return { getTextBox };
};

export default useWriteText;
