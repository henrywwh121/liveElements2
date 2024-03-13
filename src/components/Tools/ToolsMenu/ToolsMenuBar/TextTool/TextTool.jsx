import { MdTextFields } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "../../../../../features/designSlice";
import { Tools, ToolsAttributes } from "../../../ToolsConstants";

const TextTool = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.design.mode);

  return (
    <div
      className={`cursor-pointer rounded-lg p-1 ${
        mode == Tools.TEXT ? ToolsAttributes.TEXTCOLOR : "text-black"
      }`}
      onClick={() => {
        dispatch(setMode(Tools.TEXT));
      }}
    >
      <MdTextFields size={ToolsAttributes.ICONSIZE} />
    </div>
  );
};

export default TextTool;
