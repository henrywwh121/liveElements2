import { RiRectangleLine } from "react-icons/ri";
import { ToolsAttributes } from "../ToolsConstants";

const RectangleTool = () => {
  return (
    <div
      className={`cursor-pointer rounded-lg p-1 text-${ToolsAttributes.TEXTCOLOR}`}
    >
      <RiRectangleLine size={ToolsAttributes.ICONSIZE} />
    </div>
  );
};

export default RectangleTool;
