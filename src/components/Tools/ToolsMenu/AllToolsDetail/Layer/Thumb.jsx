import { Tools } from "../../../ToolsConstants";
import ImageThumb from "./ImageThumb/ImageThumb";
import TextThumb from "./TextThumb/TextThumb";

const Thumb = ({ element }) => {
  return (
    <div>
      {element.type == Tools.IMAGE ? (
        <ImageThumb element={element} />
      ) : element.type == Tools.TEXT ? (
        <TextThumb element={element} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Thumb;
