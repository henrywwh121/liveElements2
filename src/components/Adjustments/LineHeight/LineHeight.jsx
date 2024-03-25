import { CgFormatLineHeight } from "react-icons/cg";
import {
  AdjustmentsMode,
  AdjustmentsAttributes,
} from "../AdjustmentsConstants";
import { useDispatch, useSelector } from "react-redux";
import { setAdjMode } from "../../../features/adjustmentSlice";
import { setMode } from "../../../features/designSlice";
import { Tools } from "../../Tools/ToolsConstants";

const LineHeight = () => {
  const dispatch = useDispatch();
  const adjMode = useSelector((state) => state.adjustment.adjMode);

  return (
    <CgFormatLineHeight
      className={`${
        adjMode == AdjustmentsMode.LINEHEIGHT &&
        AdjustmentsAttributes.SELECTEDCOLOR
      } cursor-pointer p-1 rounded-lg`}
      size={AdjustmentsAttributes.ICONSIZE}
      onClick={() => {
        dispatch(setAdjMode(AdjustmentsMode.LINEHEIGHT));
        dispatch(setMode(Tools.SELECT));
      }}
    />
  );
};

export default LineHeight;
