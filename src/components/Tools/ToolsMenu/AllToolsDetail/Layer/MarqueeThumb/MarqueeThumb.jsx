import { ThumbAttributes } from "../ThumbConstants";
import { ToolsAttributes } from "../../../../ToolsConstants";
import "../../../../../Canvas/MarqueeElement/Marquee.css";

const MarqueeThumb = ({ element }) => {
  const originHeight = ToolsAttributes.TEXTHEIGHT;
  const heightRatio = ThumbAttributes.HEIGHT / ToolsAttributes.TEXTHEIGHT;
  let eleHeight = element.height;
  let eleWidth = element.width;

  let heightDelta = eleHeight / originHeight;

  let ratio = eleWidth / eleHeight;
  let eleRatio = ThumbAttributes.WIDTH / ThumbAttributes.HEIGHT;

  let width, height;
  if (ratio >= eleRatio) {
    width = ThumbAttributes.WIDTH;
    height = (element.height * ThumbAttributes.WIDTH) / element.width;
    heightDelta = (eleHeight * heightRatio) / height;
  } else if (ratio > 1 && ratio < eleRatio) {
    height = ThumbAttributes.HEIGHT;
    width = (element.width * ThumbAttributes.HEIGHT) / element.height;
  } else if (ratio == 1) {
    width = ThumbAttributes.HEIGHT;
    height = ThumbAttributes.HEIGHT;
  } else {
    height = ThumbAttributes.HEIGHT;
    width = (element.width * ThumbAttributes.HEIGHT) / element.height;
  }

  return (
    <div className="flex justify-center h-[40px] items-center">
      <div
        className="w-full marquee"
        style={{
          backgroundColor: element.backgroundColor,
          width: width,
          height: height,
          fontSize: (element.fontSize * heightRatio) / heightDelta,
        }}
      >
        <span
          className="animate-marquee"
          style={{
            animation: `marquee ${element.text.length / 2}s linear infinite`,
          }}
        >{`${element.text}`}</span>
      </div>
    </div>
  );
};

export default MarqueeThumb;
