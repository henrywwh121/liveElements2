import TextColor from "./TextColor/TextColor";
import TextSize from "./TextSize/TextSize";

const Adjustments = () => {
  return (
    <div className="bg-white h-[50px] w-full flex items-center p-2 gap-4">
      <TextColor />
      <TextSize />
    </div>
  );
};

export default Adjustments;
