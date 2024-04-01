import React, { useEffect, useState } from "react";
import Sketch from "@uiw/react-color-sketch";
import { useSelector, useDispatch } from "react-redux";
import { hasSameAttribute, rgbToHex } from "../../../../../util/helper";
import { setSelectedElementsValue } from "../../../../../features/elementsSlice";
import { targetIds } from "../../../../Canvas/moveableEvents";

const BackgroundColorSelect = () => {
  const dispatch = useDispatch();
  const selectedElements = useSelector(
    (state) => state.elements.selectedElements
  );

  const sameColor = rgbToHex(
    hasSameAttribute(selectedElements, "backgroundColor")
  );
  const [hex, setHex] = useState();

  useEffect(() => {
    selectedElements.forEach((element) => {
      if (element.style.backgroundColor != "") {
        element.style.backgroundColor = hex;
      }
    });

    dispatch(
      setSelectedElementsValue({
        id: targetIds(selectedElements),
        attribute: "backgroundColor",
        value: hex,
      })
    );
  }, [hex]);

  useEffect(() => {
    sameColor && setHex(sameColor);
  }, [selectedElements]);

  return (
    <div className="flex justify-center">
      <Sketch
        color={hex}
        disableAlpha={false}
        onChange={(color) => {
          setHex(color.hex);
        }}
      />
    </div>
  );
};

export default BackgroundColorSelect;
