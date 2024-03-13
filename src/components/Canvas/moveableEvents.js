import { Tools } from "../Tools/ToolsConstants";

export const targetCount = (targets) => {
  // if (targets.length == 1 && targets[0].classList[0].split("-")[0] == "TEXT") {
  //   return true;
  // } else
  if (targets.length > 1) {
    return true;
  } else {
    return false;
  }
};

export const targetsHasType = (targets, type) => {
  for (const target of targets) {
    if (target.classList[0].split("-")[0] === type) {
      return true;
    }
  }
  return false;
};

export const moveableResize = (e, targets, adjustTextWithScale) => {
  if (targetsHasType(targets, "TEXT")) {
    if (e.direction[1] == 0) {
      //resize horizontally
      e.target.style.width = `${e.width}px`;
    } else if (e.direction[0] != 0 && e.direction[1] != 0) {
      //resize diagonally and scale the fontSize
      const originFontSize = e.target.style.fontSize.replace("px", "");
      const originHeight = e.target.style.height.replace("px", "");
      const ratio = e.width / e.startRatio / originHeight;
      e.target.style.width = `${e.width}px`;
      e.target.style.height = `${e.width / e.startRatio}px`;
      e.target.style.transform = e.drag.transform;
      e.target.style.fontSize = `${originFontSize * ratio}px`;
    }
  } else {
    e.target.style.height = `${e.height}px`;
    e.target.style.width = `${e.width}px`;
    e.target.style.transform = e.drag.transform;
  }
};
