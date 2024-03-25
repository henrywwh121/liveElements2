import ToolsMenuBar from "./ToolsMenuBar/ToolsMenuBar";
import AllToolsDetail from "./AllToolsDetail/AllToolsDetail";

const ToolsMenu = () => {
  return (
    <div className="bg-slate-100 h-full flex">
      <div>
        <ToolsMenuBar />
      </div>
      <div className="w-[300px]">
        <AllToolsDetail />
      </div>
    </div>
  );
};

export default ToolsMenu;
