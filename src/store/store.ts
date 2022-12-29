import { configureStore } from "@reduxjs/toolkit";
import { earthquakeReducer } from "../reducers";
import { apiSlice } from "../services";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    earthquakeID: earthquakeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
