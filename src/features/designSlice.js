import { createSlice } from "@reduxjs/toolkit";
import { Tools } from "../components/Tools/ToolsConstants";

const initialState = {
  mode: Tools.SELECT,
};

const designSlice = createSlice({
  name: "design",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export default designSlice.reducer;
export const { setMode } = designSlice.actions;
