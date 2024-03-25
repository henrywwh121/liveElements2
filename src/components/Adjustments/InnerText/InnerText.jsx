import { BsCardText } from "react-icons/bs";
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
    <BsCardText
      className={`${
        adjMode == AdjustmentsMode.INNERTEXT &&
        AdjustmentsAttributes.SELECTEDCOLOR
      } cursor-pointer p-1 rounded-lg`}
      size={AdjustmentsAttributes.ICONSIZE}
      onClick={() => {
        dispatch(setAdjMode(AdjustmentsMode.INNERTEXT));
        dispatch(setMode(Tools.SELECT));
      }}
    />
  );
};

export default LineHeight;
