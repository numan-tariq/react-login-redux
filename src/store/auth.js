import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = { email: '', password: '', isAuthenticated: false };

const sliceAuth = createSlice({
  name: 'AuthSlicer',
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.email = '';
      state.password = '';
      state.isAuthenticated = false;
    },
  }
});

export const authActions = sliceAuth.actions;

export default sliceAuth.reducer;