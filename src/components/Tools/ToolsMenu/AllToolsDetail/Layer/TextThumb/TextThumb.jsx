import { ThumbAttributes } from "../ThumbConstants";
import { ToolsAttributes } from "../../../../ToolsConstants";

const TextThumb = ({ element }) => {
  const ele = document.getElementsByClassName(element.id);

  const originHeight = ToolsAttributes.TEXTHEIGHT;
  const heightRatio = ThumbAttributes.HEIGHT / ToolsAttributes.TEXTHEIGHT;
  let eleHeight = ele[0].offsetHeight;
  let eleWidth = ele[0].offsetWidth;

  let heightDelta = eleHeight / originHeight;

  let ratio = eleWidth / eleHeight;
  let eleRatio = ThumbAttributes.WIDTH / ThumbAttributes.HEIGHT;

  let width, height;

  if (ratio > eleRatio) {
    width = ThumbAttributes.WIDTH;
    height = (eleHeight * ThumbAttributes.WIDTH) / element.width;
    heightDelta = (eleHeight * heightRatio) / height;
  } else if (ratio > 1 && ratio <= eleRatio) {
    height = ThumbAttributes.HEIGHT;
    width = (element.width * ThumbAttributes.HEIGHT) / eleHeight;
  } else if (ratio == 1) {
    width = ThumbAttributes.HEIGHT;
    height = ThumbAttributes.HEIGHT;
  } else {
    height = ThumbAttributes.HEIGHT;
    width = (element.width * ThumbAttributes.HEIGHT) / eleHeight;
  }

  return (
    <div className="flex justify-center h-[40px] items-center">
      <div
        style={{
          fontWeight: element.fontWeight,
          color: element.color,
          wordWrap: "break-word",
          width: width,
          height: height,
          lineHeight: element.lineHeight,
          fontSize: (element.fontSize * heightRatio) / heightDelta,
        }}
      >
        {element.text}
      </div>
    </div>
  );
};

export default TextThumb;
