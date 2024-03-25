import React, { useEffect, useState } from "react";
import Sketch from "@uiw/react-color-sketch";
import { useSelector } from "react-redux";
import { hasSameAttribute, rgbToHex } from "../../../../../util/helper";

const BackgroundColorSelect = () => {
  const selectedElements = useSelector(
    (state) => state.elements.selectedElements
  );

  const sameColor = rgbToHex(
    hasSameAttribute(selectedElements, "backgroundColor")
  );
  const [hex, setHex] = useState();

  useEffect(() => {
    selectedElements.forEach((element) => {
      element.style.backgroundColor = hex;
    });
  }, [hex]);

  useEffect(() => {
    sameColor && setHex(sameColor);
  }, [selectedElements]);

  return (
    <div className="bg-white p-2 rounded-lg">
      <Sketch
        color={hex}
        disableAlpha={true}
        onChange={(color) => {
          setHex(color.hex);
        }}
      />
    </div>
  );
};

export default BackgroundColorSelect;
