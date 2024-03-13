import ColorSelect from "./ColorSelect/ColorSelect";
import { useSelector } from "react-redux";

const AllToolsDetail = () => {
  const adjMode = useSelector((state) => state.adjustment.adjMode);
  const selectedElements = useSelector(
    (state) => state.elements.selectedElements
  );

  return (
    <div className="flex justify-center m-5">
      {adjMode == 1 && selectedElements.length > 0 && <ColorSelect />}
    </div>
  );
};

export default AllToolsDetail;
