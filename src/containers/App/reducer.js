import { createSlice } from '@reduxjs/toolkit';

export const APP_SCOPE = 'app';

export const initialState = {
  loading: false,
  error: null,
};

const appSlice = createSlice({
  name: APP_SCOPE,
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.error;
    },
  },
});

export const { setLoading, setError } = appSlice.actions;
export default appSlice;
