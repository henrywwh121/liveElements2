import { IoMdColorFill } from "react-icons/io";
import {
  AdjustmentsMode,
  AdjustmentsAttributes,
} from "../AdjustmentsConstants";
import { useDispatch, useSelector } from "react-redux";
import { setAdjMode } from "../../../features/adjustmentSlice";

const BackgroundColor = () => {
  const dispatch = useDispatch();
  const adjMode = useSelector((state) => state.adjustment.adjMode);

  return (
    <IoMdColorFill
      className={`${
        adjMode == AdjustmentsMode.BACKGROUNDCOLOR &&
        AdjustmentsAttributes.SELECTEDCOLOR
      } cursor-pointer p-1 rounded-lg`}
      size={AdjustmentsAttributes.ICONSIZE}
      onClick={() => {
        dispatch(setAdjMode(AdjustmentsMode.BACKGROUNDCOLOR));
      }}
    />
  );
};

export default BackgroundColor;
