import React, { useEffect, useState } from "react";
import Sketch from "@uiw/react-color-sketch";
import { useSelector, useDispatch } from "react-redux";
import { hasSameAttribute, rgbToHex } from "../../../../../util/helper";
import { setSelectedElementsValue } from "../../../../../features/elementsSlice";
import { targetIds } from "../../../../Canvas/moveableEvents";

const ColorSelect = () => {
  const dispatch = useDispatch();
  const selectedElements = useSelector(
    (state) => state.elements.selectedElements
  );

  const sameColor = rgbToHex(hasSameAttribute(selectedElements, "color"));
  const [hex, setHex] = useState();

  useEffect(() => {
    if (hex) {
      selectedElements.forEach((element) => {
        element.style.color = hex;
      });
      dispatch(
        setSelectedElementsValue({
          id: targetIds(selectedElements),
          attribute: "color",
          value: hex,
        })
      );
    }
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
