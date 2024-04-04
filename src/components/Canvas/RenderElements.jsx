import { Tools } from "../Tools/ToolsConstants";
import TextElement from "./TextElement/TextElement";
import ImageElement from "./ImageElement/ImageElement";
import RectangleElement from "./RectangleElement/RectangleElement";
import MarqueeElement from "./MarqueeElement/MarqueeElement";
import { useSelector } from "react-redux";

const RenderElements = ({ moveableRef }) => {
  let elementsList = useSelector((state) => state.elements.elementsList);

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
        } else if (element.type == Tools.RECTANGLE) {
          return <RectangleElement key={element.id} data={element} />;
        } else if (element.type == Tools.MARQUEE) {
          return <MarqueeElement key={element.id} data={element} />;
        }
      })}
    </>
  );
};

export default RenderElements;
