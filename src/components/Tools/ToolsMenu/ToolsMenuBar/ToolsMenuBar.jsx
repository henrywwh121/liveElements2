import RectangleTool from "./RectangleTool/RectangleTool";
import TextTool from "./TextTool/TextTool";
import SelectTool from "./SelectTool/SelectTool";
import ImageTool from "./ImageTool/ImageTool";
import MarqueeTool from "./MarqueeTool/MarqueeTool";

const ToolsMenuBar = () => {
  return (
    <div className="w-[60px] bg-slate-800 h-full flex flex-col items-center p-3 gap-3">
      <SelectTool />
      <TextTool />
      <RectangleTool />
      <ImageTool />
      <MarqueeTool />
    </div>
  );
};

export default ToolsMenuBar;
