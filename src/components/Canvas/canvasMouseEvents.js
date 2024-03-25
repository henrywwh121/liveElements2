import { Tools } from "../Tools/ToolsConstants";

export const canvasMouseDown = (
  textMouseDown,
  startDrawingRectangle,
  startDrawingMarquee,
  mode
) => {
  if (mode == Tools.SELECT) {
    return;
  } else if (mode == Tools.TEXT) {
    return textMouseDown;
  } else if (mode == Tools.RECTANGLE) {
    return startDrawingRectangle;
  } else if (mode == Tools.MARQUEE) {
    return startDrawingMarquee;
  }
};

export const canvasMouseMove = (drawRectangle, drawMarquee, mode) => {
  if (mode == Tools.SELECT) {
    return;
  } else if (mode == Tools.RECTANGLE) {
    return drawRectangle;
  } else if (mode == Tools.MARQUEE) {
    return drawMarquee;
  }
};

export const canvasMouseStop = (
  stopDrawingRectangle,
  stopDrawingMarquee,
  mode
) => {
  if (mode == Tools.SELECT) {
    return;
  } else if (mode == Tools.RECTANGLE) {
    return stopDrawingRectangle;
  } else if (mode == Tools.MARQUEE) {
    return stopDrawingMarquee;
  }
};
