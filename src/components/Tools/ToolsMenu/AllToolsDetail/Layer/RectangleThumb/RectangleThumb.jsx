import { ThumbAttributes } from "../ThumbConstants";

const RectangleThumb = ({ element }) => {
  let ratio = element.width / element.height;
  let eleRatio = ThumbAttributes.WIDTH / ThumbAttributes.HEIGHT;

  let width, height;
  if (ratio >= eleRatio) {
    width = ThumbAttributes.WIDTH;
    height = (element.height * ThumbAttributes.WIDTH) / element.width;
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
        className="w-full"
        style={{
          backgroundColor: element.backgroundColor,
          width: width,
          height: height,
        }}
      ></div>
    </div>
  );
};

export default RectangleThumb;
