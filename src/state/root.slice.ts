import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface RootState {
  isAuthenticated: boolean;
  isAuthenticating: boolean;
}

const initialState: RootState = {
  isAuthenticated: false,
  isAuthenticating: false,
};

export default createSlice({
  name: "root",
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
