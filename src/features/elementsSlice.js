import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  elementsList: [],
  elementOrder: 0,
  selectedElements: [],
  containerRef: null,
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
    removeElements: (state, action) => {
      const deleteList = action.payload;
      state.elementsList = state.elementsList.filter(
        (e) => !deleteList.includes(e.id)
      );
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
    setContainerRef: (state, action) => {
      state.containerRef = action.payload;
    },
  },
});

export default elementsSlice.reducer;
export const {
  addElement,
  setElementList,
  setSelectedElements,
  removeElements,
  setSelectedElementsValue,
  modifySelectedElementsValue,
  setContainerRef,
} = elementsSlice.actions;
