import { Tools } from "../Tools/ToolsConstants";

export const canvasMouseDown = (textMouseDown, mode) => {
  if (mode == Tools.SELECT) {
    return;
  } else if (mode == Tools.TEXT) {
    return textMouseDown;
  }
};
