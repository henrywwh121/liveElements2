import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  elementsList: [],
  elementOrder: 0,
  selectedElements: [],
};

const elementsSlice = createSlice({
  name: "elements",
  initialState,
  reducers: {
    setElementList: (state, action) => {
      state.elementsList = action.payload;
    },
    addElement: (state, action) => {
      state.elementsList.push(action.payload);
      state.elementOrder = state.elementOrder + 1;
    },
    removeElement: (state, action) => {
      //
    },
    setSelectedElements: (state, action) => {
      state.selectedElements = action.payload;
    },
    setSelectedElementsValue: (state, action) => {
      const newElementsList = [...state.elementsList];
      const isNotANumber = isNaN(action.payload.value);
      const value = isNotANumber ? action.payload.value : +action.payload.value;
      action.payload.id.forEach((id) => {
        const elementsToUpdate = newElementsList.find((obj) => obj.id === id);
        if (elementsToUpdate) {
          elementsToUpdate[`${action.payload.attribute}`] = value;
        }
      });
      setElementList(newElementsList);
    },
    modifySelectedElementsValue: (state, action) => {
      const newElementsList = [...state.elementsList];
      action.payload.id.forEach((id) => {
        const elementsToUpdate = newElementsList.find((obj) => obj.id === id);
        const prevFontSize = elementsToUpdate[`${action.payload.attribute}`];
        if (elementsToUpdate) {
          elementsToUpdate[`${action.payload.attribute}`] =
            +prevFontSize + action.payload.value;
        }
      });
      setElementList(newElementsList);
    },
  },
});

export default elementsSlice.reducer;
export const {
  addElement,
  setElementList,
  setSelectedElements,
  setSelectedElementsValue,
  modifySelectedElementsValue,
} = elementsSlice.actions;
