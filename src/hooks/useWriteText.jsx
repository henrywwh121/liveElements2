import { Tools } from "../components/Tools/ToolsConstants";
import { ToolsAttributes } from "../components/Tools/ToolsConstants";
import { useDispatch, useSelector } from "react-redux";
import { addElement, setElementList } from "../features/elementsSlice";

const useWriteText = (canvasOffSetX, canvasOffSetY, scale, targets) => {
  const dispatch = useDispatch();
  const elementsList = useSelector((state) => state.elements.elementsList);
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
        color: ToolsAttributes.COLOR,
        order: elementOrder,
      })
    );
  };

  // const adjustTextBox = (name, value, attribute) => {
  //   const newTextList = [...textList];
  //   const textToUpdate = newTextList.find((obj) => obj.name === name);
  //   if (textToUpdate && attribute == "fontSize") {
  //     textToUpdate["viewWidth"] = (value * 100) / 1280;
  //     textToUpdate["fontSizeAbs"] = value;
  //   } else if (textToUpdate) {
  //     textToUpdate[`${attribute}`] = value;
  //     if (textToUpdate[`${attribute}Abs`]) {
  //       textToUpdate[`${attribute}Abs`] = value;
  //     }
  //   }
  //   setTextList(newTextList);
  // };

  return { getTextBox };
};

export default useWriteText;
