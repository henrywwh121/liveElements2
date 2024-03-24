import ColorSelect from "./ColorSelect/ColorSelect";
import DropImages from "./DropImages/DropImages";
import { Tools } from "../../ToolsConstants";
import { useSelector } from "react-redux";

const AllToolsDetail = () => {
  const adjMode = useSelector((state) => state.adjustment.adjMode);
  const selectedElements = useSelector(
    (state) => state.elements.selectedElements
  );
  const toolsMode = useSelector((state) => state.design.mode);

  return (
    <div className="flex justify-center m-5">
      {adjMode == 1 && selectedElements.length > 0 && <ColorSelect />}
      {toolsMode == Tools.IMAGE && <DropImages />}
    </div>
  );
};

export default AllToolsDetail;
