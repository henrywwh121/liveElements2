import { createSlice } from "@reduxjs/toolkit";
import { Tools } from "../components/Tools/ToolsConstants";

const initialState = {
  mode: Tools.SELECT,
  selectedImage: null,
  isDragging: false,
};

const designSlice = createSlice({
  name: "design",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    setSelectedImage: (state, action) => {
      state.selectedImage = action.payload;
    },
    setIsDragging: (state, action) => {
      state.isDragging = action.payload;
    },
  },
});

export default designSlice.reducer;
export const { setMode, setSelectedImage, setIsDragging } = designSlice.actions;
