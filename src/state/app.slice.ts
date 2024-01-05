import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface AppState {
  isAuthenticated: boolean;
  isAuthenticating: boolean;
}

const initialState: AppState = {
  isAuthenticated: false,
  isAuthenticating: false,
};

export default createSlice({
  name: 'root',
  initialState,
  reducers: {
    setIsAuthenticated(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
    setIsAuthenticating(state, action: PayloadAction<boolean>) {
      state.isAuthenticating = action.payload;
    },
  },
});
