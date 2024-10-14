import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/slices/CounterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
