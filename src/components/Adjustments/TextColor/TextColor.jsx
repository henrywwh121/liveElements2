import { MdOutlineFormatColorText } from "react-icons/md";
import {
  AdjustmentsMode,
  AdjustmentsAttributes,
} from "../AdjustmentsConstants";
import { useDispatch, useSelector } from "react-redux";
import { setAdjMode } from "../../../features/adjustmentSlice";

const TextColor = () => {
  const dispatch = useDispatch();
  const adjMode = useSelector((state) => state.adjustment.adjMode);

  return (
    <MdOutlineFormatColorText
      className={`${
        adjMode == AdjustmentsMode.TEXTCOLOR &&
        AdjustmentsAttributes.SELECTEDCOLOR
      } cursor-pointer p-1 rounded-lg`}
      size={AdjustmentsAttributes.ICONSIZE}
      onClick={() => {
        dispatch(setAdjMode(AdjustmentsMode.TEXTCOLOR));
      }}
    />
  );
};

export default TextColor;
