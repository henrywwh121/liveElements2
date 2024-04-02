import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { setMode } from "../../../features/designSlice";
import { Tools } from "../../Tools/ToolsConstants";
import { setSelectedElementsValue } from "../../../features/elementsSlice";

const TextElement = ({ data, moveableRef }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState(data.text);
  const textRef = useRef(null);

  useEffect(() => {
    const moveable = moveableRef.current;
    moveable.updateRect();
  }, [data.fontSize, text, data.width]);

  useEffect(() => {
    if (textRef && textRef.current) {
      textRef.current.innerText = data.text;
    }
  }, [data.text]);

  return (
    <div
      ref={textRef}
      className={`${data.id} absolute target`}
      style={{
        left: `${data.startX}px`,
        top: `${data.startY}px`,
        fontSize: `${data.fontSize}px`,
        width: `${data.width}px`,
        lineHeight: `${data.lineHeight}`,
        wordWrap: "break-word",
        color: `${data.color}`,
        fontWeight: `${data.fontWeight}`,
        transform: `${data.translate}`,
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
      YOUR TEXT
    </div>
  );
};

export default TextElement;
