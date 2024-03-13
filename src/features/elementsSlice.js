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
  },
});

export default elementsSlice.reducer;
export const { addElement, setElementList, setSelectedElements } =
  elementsSlice.actions;
