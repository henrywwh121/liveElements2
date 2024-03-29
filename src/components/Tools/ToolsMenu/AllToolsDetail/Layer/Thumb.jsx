import { Tools } from "../../../ToolsConstants";
import ImageThumb from "./ImageThumb/ImageThumb";
import TextThumb from "./TextThumb/TextThumb";
import RectangleThumb from "./RectangleThumb/RectangleThumb";

const Thumb = ({ element }) => {
  return (
    <div>
      {element.type == Tools.IMAGE ? (
        <ImageThumb element={element} />
      ) : element.type == Tools.TEXT ? (
        <TextThumb element={element} />
      ) : element.type == Tools.RECTANGLE ? (
        <RectangleThumb element={element} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Thumb;
