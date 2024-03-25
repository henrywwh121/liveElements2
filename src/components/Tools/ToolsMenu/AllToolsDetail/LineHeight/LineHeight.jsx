import { hasSameAttribute } from "../../../../../util/helper";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const LineHeight = () => {
  const selectedElements = useSelector(
    (state) => state.elements.selectedElements
  );

  const sameLineHeight = hasSameAttribute(selectedElements, "lineHeight");
  const [lineHeight, setLineHeight] = useState(sameLineHeight);

  useEffect(() => {
    selectedElements.forEach((element) => {
      element.style.lineHeight = lineHeight;
    });
  }, [lineHeight]);

  useEffect(() => {
    lineHeight && setLineHeight(lineHeight);
  }, [selectedElements]);

  return (
    <div className="flex gap-2 flex-col">
      <div className="flex justify-between">
        <div className="text-lg font-bold">LineHeight</div>
        <div>{lineHeight}</div>
      </div>
      <input
        type="range"
        min={0.5}
        max={2.5}
        step={0.1}
        value={lineHeight}
        onChange={(e) => {
          setLineHeight(e.target.value);
        }}
      />
    </div>
  );
};

export default LineHeight;
