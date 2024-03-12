import RectangleTool from "../RectangleTool/RectangleTool";
import TextTool from "../TextTool/TextTool";
import SelectTool from "../SelectTool/SelectTool";

const ToolsMenuBar = () => {
  return (
    <div className="w-[60px] bg-slate-800 h-full flex flex-col items-center p-3 gap-3">
      <SelectTool />
      <TextTool />
      <RectangleTool />
    </div>
  );
};

export default ToolsMenuBar;
