import { hasSameAttributeInElementList } from "../../../../../util/helper";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setSelectedElementsValue } from "../../../../../features/elementsSlice";
import { targetIds } from "../../../../Canvas/moveableEvents";

const InnerText = () => {
  const dispatch = useDispatch();
  const selectedElements = useSelector(
    (state) => state.elements.selectedElements
  );
  const elements = useSelector((state) => state.elements.elementsList);

  let sameText = hasSameAttributeInElementList(
    selectedElements,
    "text",
    elements
  );

  sameText = sameText ? sameText : "--";

  const [innerText, setInnerText] = useState(sameText);

  const handleBlur = () => {
    dispatch(
      setSelectedElementsValue({
        id: targetIds(selectedElements),
        attribute: "text",
        value: innerText,
      })
    );
  };

  return (
    <div>
      <textarea
        value={innerText}
        onChange={(e) => setInnerText(e.target.value)}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default InnerText;
