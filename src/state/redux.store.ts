import { configureStore } from "@reduxjs/toolkit";
import rootSlice from "./root.slice";

const store = configureStore({
  reducer: {
    root: rootSlice.reducer,
  },
});

export type ReduxState = ReturnType<typeof store.getState>;
export type ReduxStoreDispatch = typeof store.dispatch;

export default store;
