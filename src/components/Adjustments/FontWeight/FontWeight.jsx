import { RxFontBold } from "react-icons/rx";
import { AdjustmentsAttributes } from "../AdjustmentsConstants";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { hasSameAttribute } from "../../../util/helper";

const LineHeight = () => {
  const selectedElements = useSelector(
    (state) => state.elements.selectedElements
  );

  let sameWeight = hasSameAttribute(selectedElements, "fontWeight");
  const same = sameWeight == "bold" ? true : false;
  const [isBold, setIsBold] = useState(same);

  useEffect(() => {
    selectedElements.forEach((element) => {
      const weight = isBold ? "bold" : "normal";
      element.style.fontWeight = weight;
    });
  }, [isBold]);

  return (
    <RxFontBold
      className={`cursor-pointer p-1 rounded-lg ${
        isBold && AdjustmentsAttributes.SELECTEDCOLOR
      }`}
      size={AdjustmentsAttributes.ICONSIZE}
      onClick={() => {
        setIsBold(!isBold);
      }}
    />
  );
};

export default LineHeight;
