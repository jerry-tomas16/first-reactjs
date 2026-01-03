import {configureStore} from "@reduxjs/toolkit";
import reducers from "./reducers";

const initialState = {};

const store = configureStore({
  reducer: reducers,
  preloadedState: initialState,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
