import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { setMode } from "../../../features/designSlice";
import { Tools } from "../../Tools/ToolsConstants";
import { setSelectedElementsValue } from "../../../features/elementsSlice";

const TextElement = ({ data, moveableRef }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState(data.text);

  useEffect(() => {
    const moveable = moveableRef.current;
    moveable.updateRect();
  }, [data.fontSize, text, data.width]);

  return (
    <div
      className={`${data.id} absolute target no-underline`}
      style={{
        left: `${data.startX}px`,
        top: `${data.startY}px`,
        fontSize: `${data.fontSize}px`,
        width: `${data.width}px`,
        lineHeight: `${data.lineHeight}`,
        wordWrap: "break-word",
        color: `${data.color}`,
        fontWeight: `${data.fontWeight}`,
      }}
      onDoubleClick={() => {
        dispatch(setMode(Tools.TEXT));
      }}
      onInput={(e) => {
        dispatch(
          setSelectedElementsValue({
            id: [data.id],
            attribute: "text",
            value: e.target.innerText,
          })
        );
        setText(e.target.innerText);
      }}
      suppressContentEditableWarning={true}
      contentEditable={true}
    >
      MY TEXT
    </div>
  );
};

export default TextElement;
