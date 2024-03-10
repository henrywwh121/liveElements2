import ToolsMenu from "./components/Tools/ToolsMenu/ToolsMenu";
import Adjustments from "./components/Adjustments/Adjustments";
import Canvas from "./components/Canvas/Canvas";
import SubTools from "./components/SubTools/SubTools";
import TopMenu from "./components/TopMenu/TopMenu";

function App() {
  return (
    <div className="h-screen w-screen flex flex-col bg-slate-300">
      <div>
        <TopMenu />
      </div>
      <div className="flex-1 flex">
        <div className="w-1/6">
          <ToolsMenu />
        </div>
        <div className="w-5/6 flex flex-col">
          <Adjustments />
          <Canvas />
          <SubTools />
        </div>
      </div>
    </div>
  );
}

export default App;
