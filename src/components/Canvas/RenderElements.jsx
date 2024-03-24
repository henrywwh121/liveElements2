import { Tools } from "../Tools/ToolsConstants";
import TextElement from "./TextElement/TextElement";
import ImageElement from "./ImageElement/ImageElement";
import { useSelector } from "react-redux";

const RenderElements = ({ moveableRef }) => {
  const elementsList = useSelector((state) => state.elements.elementsList);

  console.log(elementsList);

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
        } else if (element.type == Tools.IMAGE) {
          return <ImageElement key={element.id} data={element} />;
        }
      })}
    </>
  );
};

export default RenderElements;
