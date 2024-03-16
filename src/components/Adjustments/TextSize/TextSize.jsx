import { useState, useEffect } from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { hasSameAttribute } from "../../../util/helper";

const TextSize = () => {
  const selectedElements = useSelector(
    (state) => state.elements.selectedElements
  );

  let sameSize = hasSameAttribute(selectedElements, "fontSize");
  sameSize = sameSize && sameSize.replace("px", "");
  const [fontSize, setFontSize] = useState();

  useEffect(() => {
    sameSize && setFontSize(sameSize);
  }, [selectedElements]);

  return (
    <div className="flex border-2 rounded-lg items-center gap-1 px-2 h-full">
      <FaMinus size={20} className="cursor-pointer" />
      <div className="border-r-2 h-full" />
      <div>
        <input
          type="text"
          className="w-[50px] text-md outline-none text-center"
          value={fontSize}
        />
      </div>
      <div className="border-r-2 h-full" />
      <FaPlus size={20} className="cursor-pointer" />
    </div>
  );
};

export default TextSize;
