import { Tools } from "../Tools/ToolsConstants";
import TextElement from "./TextElement.jsx/TextElement";

const RenderElements = ({ elementsList, moveableRef }) => {
  return (
    <>
      {elementsList.map((element) => {
        if ((element.type = Tools.TEXT)) {
          return <TextElement data={element} id={element.name} moveableRef={moveableRef}/>;
        }
      })}
    </>
  );
};

export default RenderElements;
