import { FaImage } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { setMode } from "../../../../../features/designSlice";
import { Tools, ToolsAttributes } from "../../../ToolsConstants";
import { setAdjMode } from "../../../../../features/adjustmentSlice";
import { AdjustmentsMode } from "../../../../Adjustments/AdjustmentsConstants";

const ImageTool = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.design.mode);

  return (
    <div
      className={`cursor-pointer rounded-lg p-1 ${
        mode == Tools.IMAGE ? ToolsAttributes.TEXTCOLOR : "text-black"
      }`}
      onClick={() => {
        dispatch(setAdjMode(AdjustmentsMode.NOTHING));
        dispatch(setMode(Tools.IMAGE));
      }}
    >
      <FaImage size={ToolsAttributes.ICONSIZE} />
    </div>
  );
};

export default ImageTool;
