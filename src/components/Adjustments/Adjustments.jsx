import TextColor from "./TextColor/TextColor";
import TextSize from "./TextSize/TextSize";
import { useSelector } from "react-redux";
import { targetsHasType } from "../Canvas/moveableEvents";

const Adjustments = () => {
  const selectedElements = useSelector(
    (state) => state.elements.selectedElements
  );

  const hasTEXT = targetsHasType(selectedElements, "TEXT");

  return (
    <div className="bg-white h-[50px] w-full flex items-center p-2 gap-4">
      {hasTEXT && <TextColor />}
      {hasTEXT && <TextSize />}
    </div>
  );
};

export default Adjustments;
