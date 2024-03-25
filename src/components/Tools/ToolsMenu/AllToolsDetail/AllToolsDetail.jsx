import ColorSelect from "./ColorSelect/ColorSelect";
import BackgroundColorSelect from "./BackgroundColorSelect/BackgroundColorSelect";
import LineHeight from "./LineHeight/LineHeight";
import DropImages from "./DropImages/DropImages";
import InnerText from "./InnerText/InnerText";
import { Tools } from "../../ToolsConstants";
import { useSelector } from "react-redux";

const AllToolsDetail = () => {
  const adjMode = useSelector((state) => state.adjustment.adjMode);
  const selectedElements = useSelector(
    (state) => state.elements.selectedElements
  );
  const toolsMode = useSelector((state) => state.design.mode);

  return (
    <div className="flex justify-center m-5 flex-col">
      {toolsMode == Tools.IMAGE && <DropImages />}
      {adjMode == 1 && selectedElements.length > 0 && <ColorSelect />}
      {adjMode == 2 && selectedElements.length > 0 && <BackgroundColorSelect />}
      {adjMode == 3 && selectedElements.length > 0 && <LineHeight />}
      {adjMode == 4 && selectedElements.length > 0 && <InnerText />}
    </div>
  );
};

export default AllToolsDetail;
