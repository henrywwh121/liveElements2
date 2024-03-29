const RectangleThumb = ({ element }) => {
  let ratio = element.width / element.height;
  let eleRatio = 240 / 60;
  let width, height;
  if (ratio >= 6) {
    width = 240;
    height = (element.height * 240) / element.width;
  } else if (ratio > 1 && ratio < 6) {
    height = 40;
    width = (element.width * 40) / element.height;
  } else if (ratio == 1) {
    width = 40;
    height = 40;
  } else {
    height = 40;
    width = (element.width * 40) / element.height;
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
