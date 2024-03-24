import { targetIds } from "../components/Canvas/moveableEvents";

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
  if (selected.length == 0) {
    return null;
  }
  if (selected.length == 1) {
    return selected[0].style[attribute];
  } else {
    const common = selected[0].style[attribute];
    let hasDifference = false;
    selected.forEach((element) => {
      if (element.style[attribute] != common) {
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
  const selectedElements = elementsList.filter((e) => idsLists.includes(e.id));
  if (selected.length == 0) {
    return null;
  }
  if (selected.length == 1) {
    return selectedElements[0][attribute];
  } else {
    const common = selectedElements[0][attribute];
    let hasDifference = false;
    selectedElements.forEach((element) => {
      if (element[attribute] != common) {
        hasDifference = true;
        return false;
      }
    });
    return hasDifference ? null : common;
  }
};
