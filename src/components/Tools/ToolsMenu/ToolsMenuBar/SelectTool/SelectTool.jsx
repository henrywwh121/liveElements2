import { FaMousePointer } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "../../../../../features/designSlice";
import { Tools, ToolsAttributes } from "../../../ToolsConstants";

const SelectTool = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.design.mode);

  return (
    <div
      className={`cursor-pointer rounded-lg p-1 ${
        mode == Tools.SELECT ? ToolsAttributes.TEXTCOLOR : "text-black"
      }`}
      onClick={() => {
        dispatch(setMode(Tools.SELECT));
      }}
    >
      <FaMousePointer size={ToolsAttributes.ICONSIZE} />
    </div>
  );
};

export default SelectTool;
