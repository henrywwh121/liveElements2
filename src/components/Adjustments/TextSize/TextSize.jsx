import { useState, useEffect, useRef } from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import {
  hasSameAttribute,
  hasSameAttributeInElementList,
} from "../../../util/helper";
import {
  setSelectedElementsValue,
  modifySelectedElementsValue,
} from "../../../features/elementsSlice";
import { targetIds } from "../../Canvas/moveableEvents";

const TextSize = () => {
  const dispatch = useDispatch();
  const selectedElements = useSelector(
    (state) => state.elements.selectedElements
  );

  const elements = useSelector((state) => state.elements.elementsList);
  let sameSize = hasSameAttributeInElementList(
    selectedElements,
    "fontSize",
    elements
  );

  sameSize = sameSize ? sameSize : "--";

  const [input, setInput] = useState(sameSize);

  useEffect(() => {
    sameSize && setInput(sameSize);
  }, [sameSize]);

  const handleBlur = () => {
    dispatch(
      setSelectedElementsValue({
        id: targetIds(selectedElements),
        attribute: "fontSize",
        value: input,
      })
    );
  };
  const handleKeyPress = (e) => {
    if (e.keyCode == "13") {
      dispatch(
        setSelectedElementsValue({
          id: targetIds(selectedElements),
          attribute: "fontSize",
          value: input,
        })
      );
    }
  };

  const increment = () => {
    if (sameSize != "--") {
      setInput((prev) => +prev + 1);
    }

    dispatch(
      modifySelectedElementsValue({
        id: targetIds(selectedElements),
        attribute: "fontSize",
        value: 1,
      })
    );
  };

  const decrement = () => {
    if (sameSize != "--") {
      setInput((prev) => +prev - 1);
    }

    dispatch(
      modifySelectedElementsValue({
        id: targetIds(selectedElements),
        attribute: "fontSize",
        value: -1,
      })
    );
  };

  return (
    <div className="flex border-2 rounded-lg items-center gap-1 px-2 h-full">
      <FaMinus size={20} className="cursor-pointer" onClick={decrement} />
      <div className="border-r-2 h-full" />
      <div>
        <input
          type="text"
          className="w-[50px] text-md outline-none text-center"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onBlur={handleBlur}
          onKeyDown={handleKeyPress}
        />
      </div>
      <div className="border-r-2 h-full" />
      <FaPlus size={20} className="cursor-pointer" onClick={increment} />
    </div>
  );
};

export default TextSize;
