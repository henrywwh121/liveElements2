import { FaMousePointer } from "react-icons/fa";
import { ToolsAttributes } from "../ToolsConstants";
import { useDispatch } from "react-redux";
import { setMode } from "../../../features/designSlice";
import { Tools } from "../ToolsConstants";

const SelectTool = () => {
  const dispatch = useDispatch();

  return (
    <div
      className={`cursor-pointer rounded-lg p-1 text-${ToolsAttributes.TEXTCOLOR}`}
      onClick={() => {
        dispatch(setMode(Tools.SELECT));
      }}
    >
      <FaMousePointer size={ToolsAttributes.ICONSIZE} />
    </div>
  );
};

export default SelectTool;
