import { configureStore } from "@reduxjs/toolkit";
import designReducer from "../features/designSlice";
import elementsSlice from "../features/elementsSlice";
import adjustmentSlice from "../features/adjustmentSlice";

const store = configureStore({
  reducer: {
    design: designReducer,
    elements: elementsSlice,
    adjustment: adjustmentSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
