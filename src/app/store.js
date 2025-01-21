import { configureStore } from "@reduxjs/toolkit";
import thoughtsReducer from "./thoughtSlice";

export const store = configureStore({
  reducer: {
    thoughts: thoughtsReducer,
  },
});
