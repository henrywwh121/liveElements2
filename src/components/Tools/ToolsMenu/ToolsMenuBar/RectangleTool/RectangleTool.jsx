import { RiRectangleLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Tools, ToolsAttributes } from "../../../ToolsConstants";

const RectangleTool = () => {
  const mode = useSelector((state) => state.design.mode);

  return (
    <div
      className={`cursor-pointer rounded-lg p-1 ${
        mode == Tools.RECTANGLE
          ? "text-" + ToolsAttributes.TEXTCOLOR
          : "text-black"
      }`}
    >
      <RiRectangleLine size={ToolsAttributes.ICONSIZE} />
    </div>
  );
};

export default RectangleTool;
