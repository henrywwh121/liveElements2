import { configureStore } from "@reduxjs/toolkit";
import designReducer from "../features/designSlice";

const store = configureStore({
  reducer: {
    design: designReducer,
  },
});

export default store;
