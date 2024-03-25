import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setMode } from "../../../features/designSlice";
import { Tools } from "../../Tools/ToolsConstants";

const TextElement = ({ data, moveableRef }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("YOUR TEXT");

  useEffect(() => {
    const moveable = moveableRef.current;
    moveable.updateRect();
  }, [data.fontSize, text, data.width]);

  return (
    <div
      className={`${data.id} absolute target`}
      style={{
        left: `${data.startX}px`,
        top: `${data.startY}px`,
        fontSize: `${data.fontSize}px`,
        width: `${data.width}px`,
        lineHeight: `${data.lineHeight}`,
        wordWrap: "break-word",
        color: `${data.color}`,
      }}
      onDoubleClick={() => {
        dispatch(setMode(Tools.TEXT));
      }}
      onInput={(e) => {
        setText(e.target.innerHTML);
      }}
      suppressContentEditableWarning={true}
      contentEditable={true}
    >
      Your Text
    </div>
  );
};

export default TextElement;
