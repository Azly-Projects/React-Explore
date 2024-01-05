import { configureStore } from '@reduxjs/toolkit';
import appSlice from './app.slice';

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});

export type ReduxState = ReturnType<typeof store.getState>;
export type ReduxStoreDispatch = typeof store.dispatch;

export default store;
