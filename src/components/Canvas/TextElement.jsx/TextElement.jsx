import { useEffect, useState } from "react";

const TextElement = ({ data, moveableRef }) => {
  const [text, setText] = useState("YOUR TEXT");

  useEffect(() => {
    const moveable = moveableRef.current;
    moveable.updateRect();
  }, [data.fontSize, text, data.width]);

  return (
    <div
      className={`absolute target`}
      style={{
        left: `${data.startX}px`,
        top: `${data.startY}px`,
        fontSize: `${data.fontSize}px`,
        width: `${data.width}px`,
        wordWrap: "break-word",
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
