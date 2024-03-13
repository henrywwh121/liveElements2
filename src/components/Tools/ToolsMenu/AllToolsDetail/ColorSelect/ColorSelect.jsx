import React, { useEffect, useState } from "react";
import Circle from "@uiw/react-color-circle";
import { useSelector } from "react-redux";
import { hasSameAttribute } from "../../../../../util/helper";

const ColorSelect = () => {
  const selectedElements = useSelector(
    (state) => state.elements.selectedElements
  );

  const sameColor = hasSameAttribute(selectedElements, "color");
  const [hex, setHex] = useState();

  useEffect(() => {
    selectedElements.forEach((element) => {
      element.style.color = hex;
    });
  }, [hex]);

  useEffect(() => {
    sameColor && setHex(sameColor);
  }, [selectedElements]);

  return (
    <div className="bg-white p-2 rounded-lg">
      <Circle
        colors={[
          "#000000", // Black
          "#FFFFFF", // White
          "#808080", // Gray
          "#FF0000", // Rainbow - Red
          "#FFA500", // Rainbow - Orange
          "#FFFF00", // Rainbow - Yellow
          "#00FF00", // Rainbow - Green
          "#0000FF", // Rainbow - Blue
          "#00FFFF", // Cyan
          "#FF00FF", // Magenta
          "#4B0082", // Rainbow - Indigo
          "#EE82EE", // Rainbow - Violet
        ]}
        color={hex}
        pointProps={{
          style: { height: "35px", width: "35px", border: "1px solid #e8e8e8" },
        }}
        onChange={(color) => {
          setHex(color.hex);
        }}
      />
    </div>
  );
};

export default ColorSelect;
