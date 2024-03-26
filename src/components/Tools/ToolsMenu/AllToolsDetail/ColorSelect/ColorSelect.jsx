import React, { useEffect, useState } from "react";
import Sketch from "@uiw/react-color-sketch";
import { useSelector } from "react-redux";
import { hasSameAttribute, rgbToHex } from "../../../../../util/helper";

const ColorSelect = () => {
  const selectedElements = useSelector(
    (state) => state.elements.selectedElements
  );

  const sameColor = rgbToHex(hasSameAttribute(selectedElements, "color"));
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
    <div className="flex justify-center">
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

export default ColorSelect;
