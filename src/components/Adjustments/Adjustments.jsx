import TextColor from "./TextColor/TextColor";
import TextSize from "./TextSize/TextSize";
import { useSelector } from "react-redux";

const Adjustments = () => {
  const selectedElements = useSelector(
    (state) => state.elements.selectedElements
  );

  console.log(selectedElements);

  return (
    <div className="bg-white h-[50px] w-full flex items-center p-2 gap-4">
      <TextColor />
      <TextSize />
    </div>
  );
};

export default Adjustments;
