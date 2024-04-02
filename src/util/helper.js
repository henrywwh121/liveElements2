import { targetIds } from "../components/Canvas/moveableEvents";
import { Tools } from "../components/Tools/ToolsConstants";

export const rgbToHex = (rgb) => {
  const regex = /(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})/;
  const [, r, g, b] = regex.exec(rgb) || [];
  if (r === undefined || g === undefined || b === undefined) {
    return null; // Invalid format
  }
  const hex =
    "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
  return hex.toUpperCase();
};

export const hasSameAttribute = (selected, attribute) => {
  //get the correct elements first
  let filterStr = [];
  if (
    attribute == "fontWeight" ||
    attribute == "fontSize" ||
    attribute == "color"
  ) {
    filterStr = ["TEXT", "MARQUEE"];
  } else if (attribute == "backgroundColor") {
    filterStr = ["RECT", "MARQUEE"];
  } else if (attribute == "lineHeight") {
    filterStr = ["TEXT"];
  }

  const filtered = selected.filter((e) => {
    return filterStr.includes(e.classList[0].split("-")[0]);
  });

  if (filtered.length == 0) {
    return null;
  }
  if (filtered.length == 1) {
    return filtered[0].style[attribute];
  } else {
    const common = filtered[0].style[attribute];
    let hasDifference = false;
    filtered.forEach((element) => {
      if (element.style[attribute] != common) {
        hasDifference = true;
        return false;
      }
    });
    return hasDifference ? null : common;
  }
};

export const hasSameInnerText = (selected) => {
  if (selected.length == 0) {
    return null;
  }
  if (selected.length == 1) {
    return selected[0].innnerText;
  } else {
    const common = selected[0].innnerText;
    let hasDifference = false;
    selected.forEach((element) => {
      if (element.innnerText != common) {
        hasDifference = true;
        return false;
      }
    });
    return hasDifference ? null : common;
  }
};

export const hasSameAttributeInElementList = (
  selected,
  attribute,
  elementsList
) => {
  const idsLists = targetIds(selected);
  let selectedElements = elementsList.filter((e) => idsLists.includes(e.id));

  let filterStr = [];
  if (
    attribute == "fontWeight" ||
    attribute == "fontSize" ||
    attribute == "color"
  ) {
    filterStr = [Tools.TEXT, Tools.MARQUEE];
  } else if (attribute == "backgroundColor") {
    filterStr = [Tools.RECTANGLE, Tools.MARQUEE];
  } else if (attribute == "lineHeight") {
    filterStr = [Tools.TEXT];
  } else if (attribute == "text") {
    filterStr = [Tools.MARQUEE];
  }

  const filtered = selectedElements.filter((e) => {
    return filterStr.includes(e.type);
  });

  if (selected.length == 0) {
    return null;
  }
  if (selected.length == 1) {
    return filtered[0][attribute];
  } else {
    const common = filtered[0][attribute];
    let hasDifference = false;
    filtered.forEach((element) => {
      if (element[attribute] != common) {
        hasDifference = true;
        return false;
      }
    });
    return hasDifference ? null : common;
  }
};
