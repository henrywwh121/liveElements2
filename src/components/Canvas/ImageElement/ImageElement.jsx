import React from "react";

const ImageElement = ({ data }) => {
  return (
    <img
      className={`${data.id} absolute target`}
      src={`${data.path}`}
      style={{
        left: `${data.startX}px`,
        top: `${data.startY}px`,
        width: `${data.width}px`,
        height: `${data.height}px`,
      }}
    />
  );
};

export default ImageElement;
