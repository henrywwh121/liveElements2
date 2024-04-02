import { IoIosSave } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "../../../../../features/designSlice";
import { Tools, ToolsAttributes } from "../../../ToolsConstants";

const SaveTool = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.design.mode);

  return (
    <div
      className={`cursor-pointer rounded-lg p-1 ${
        mode == Tools.SAVE ? ToolsAttributes.TEXTCOLOR : "text-black"
      }`}
      onClick={() => {
        dispatch(setMode(Tools.SAVE));
      }}
    >
      <IoIosSave size={ToolsAttributes.ICONSIZE} />
    </div>
  );
};

export default SaveTool;
