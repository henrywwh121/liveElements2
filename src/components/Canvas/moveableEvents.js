import { Tools } from "../Tools/ToolsConstants";
import store from "../../app/store";
import { setSelectedElementsValue } from "../../features/elementsSlice";

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

export const targetIds = (targets) => {
  const idList = [];
  for (const target of targets) {
    idList.push(target.classList[0]);
  }
  return idList;
};

export const moveableResize = (e, targets) => {
  if (targetsHasType(targets, "TEXT")) {
    if (e.direction[1] == 0) {
      //resize horizontally
      e.target.style.width = `${e.width}px`;
      store.dispatch(
        setSelectedElementsValue({
          id: [e.target.classList[0]],
          attribute: "width",
          value: +e.width,
        })
      );
    } else if (e.direction[0] != 0 && e.direction[1] != 0) {
      //resize diagonally and scale the fontSize
      const originFontSize = e.target.style.fontSize.replace("px", "");
      const originHeight = e.target.style.height.replace("px", "");
      const ratio = e.width / e.startRatio / originHeight;
      e.target.style.width = `${e.width}px`;
      e.target.style.height = `${e.width / e.startRatio}px`;
      e.target.style.transform = e.drag.transform;
      e.target.style.fontSize = `${originFontSize * ratio}px`;
      store.dispatch(
        setSelectedElementsValue({
          id: [e.target.classList[0]],
          attribute: "fontSize",
          value: +originFontSize * ratio,
        })
      );

      store.dispatch(
        setSelectedElementsValue({
          id: [e.target.classList[0]],
          attribute: "width",
          value: +e.width,
        })
      );
    }
  } else {
    e.target.style.height = `${e.height}px`;
    e.target.style.width = `${e.width}px`;
    e.target.style.transform = e.drag.transform;

    store.dispatch(
      setSelectedElementsValue({
        id: [e.target.classList[0]],
        attribute: "width",
        value: +e.width,
      })
    );

    store.dispatch(
      setSelectedElementsValue({
        id: [e.target.classList[0]],
        attribute: "height",
        value: +e.height,
      })
    );
  }
};

export const moveableResizeEnd = (e, targets) => {
  if (targetsHasType(targets, "TEXT")) {
    e.target.style.height = "";
  }
};
