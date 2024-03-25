import React from "react";

const RectangleElement = ({ data }) => {
  return (
    <div
      className={`${data.id} absolute target`}
      style={{
        left: `${data.startX}px`,
        top: `${data.startY}px`,
        width: `${data.width}px`,
        height: `${data.height}px`,
        backgroundColor: `${data.backgroundColor}`
      }}
    />
  );
};

export default RectangleElement;
