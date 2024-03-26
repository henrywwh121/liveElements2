import TextColor from "./TextColor/TextColor";
import TextSize from "./TextSize/TextSize";
import BackgroundColor from "./BackgroundColor/BackgroundColor";
import LineHeight from "./LineHeight/LineHeight";
import InnerText from "./InnerText/InnerText";
import FontWeight from "./FontWeight/FontWeight";
import { useSelector } from "react-redux";
import { targetsHasType } from "../Canvas/moveableEvents";

const Adjustments = () => {
  const selectedElements = useSelector(
    (state) => state.elements.selectedElements
  );

  const hasTEXT = targetsHasType(selectedElements, "TEXT");
  const hasRECT = targetsHasType(selectedElements, "RECT");
  const hasMARQUEE = targetsHasType(selectedElements, "MARQUEE");

  return (
    <div className="bg-white h-[50px] w-full flex items-center p-2 gap-4">
      {(hasTEXT || hasMARQUEE) && <TextColor />}
      {(hasTEXT || hasMARQUEE) && <TextSize />}
      {(hasTEXT || hasMARQUEE) && <LineHeight />}
      {(hasRECT || hasMARQUEE) && <BackgroundColor />}
      {hasMARQUEE && <InnerText />}
      {(hasTEXT || hasMARQUEE) && <FontWeight />}
    </div>
  );
};

export default Adjustments;
