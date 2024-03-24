import { RiRectangleLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { Tools, ToolsAttributes } from "../../../ToolsConstants";
import { setMode } from "../../../../../features/designSlice";

const RectangleTool = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.design.mode);

  return (
    <div
      className={`cursor-pointer rounded-lg p-1 ${
        mode == Tools.RECTANGLE ? ToolsAttributes.TEXTCOLOR : "text-black"
      }`}
      onClick={() => {
        dispatch(setMode(Tools.RECTANGLE));
      }}
    >
      <RiRectangleLine size={ToolsAttributes.ICONSIZE} />
    </div>
  );
};

export default RectangleTool;
