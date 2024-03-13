import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adjMode: 0,
};

const adjustmentSlice = createSlice({
  name: "adjustment",
  initialState,
  reducers: {
    setAdjMode: (state, action) => {
      state.adjMode = action.payload;
    },
  },
});

export default adjustmentSlice.reducer;
export const { setAdjMode } = adjustmentSlice.actions;
