import { Tools } from "../Tools/ToolsConstants";
import TextElement from "./TextElement.jsx/TextElement";
import { useSelector } from "react-redux";

const RenderElements = ({ moveableRef }) => {
  const elementsList = useSelector((state) => state.elements.elementsList);

  return (
    <>
      {elementsList.map((element) => {
        if (element.type == Tools.TEXT) {
          return (
            <TextElement
              key={element.id}
              data={element}
              moveableRef={moveableRef}
            />
          );
        }
      })}
    </>
  );
};

export default RenderElements;
