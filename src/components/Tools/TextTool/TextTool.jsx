import { MdTextFields } from "react-icons/md";
import { ToolsAttributes } from "../ToolsConstants";
import { useDispatch } from "react-redux";
import { setMode } from "../../../features/designSlice";
import { Tools } from "../ToolsConstants";

const TextTool = () => {
  const dispatch = useDispatch();

  return (
    <div
      className={`cursor-pointer rounded-lg p-1 text-${ToolsAttributes.TEXTCOLOR}`}
      onClick={() => {
        dispatch(setMode(Tools.TEXT));
      }}
    >
      <MdTextFields size={ToolsAttributes.ICONSIZE} />
    </div>
  );
};

export default TextTool;
