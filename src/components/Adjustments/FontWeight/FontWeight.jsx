import { RxFontBold } from "react-icons/rx";
import { AdjustmentsAttributes } from "../AdjustmentsConstants";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { hasSameAttribute } from "../../../util/helper";
import { setSelectedElementsValue } from "../../../features/elementsSlice";
import { targetIds } from "../../Canvas/moveableEvents";

const LineHeight = () => {
  const dispatch = useDispatch();
  const selectedElements = useSelector(
    (state) => state.elements.selectedElements
  );

  let sameWeight = hasSameAttribute(selectedElements, "fontWeight");
  const same = sameWeight == "bold" ? true : false;
  const [isBold, setIsBold] = useState(same);

  useEffect(() => {
    const weight = isBold ? "bold" : "normal";
    selectedElements.forEach((element) => {
      element.style.fontWeight = weight;
    });

    dispatch(
      setSelectedElementsValue({
        id: targetIds(selectedElements),
        attribute: "fontWeight",
        value: weight,
      })
    );
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
