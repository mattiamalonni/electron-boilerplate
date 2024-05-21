import { createSlice } from '@reduxjs/toolkit';

export const APP_SCOPE = 'home';

export const initialState = {
  users: [],
};

const appSlice = createSlice({
  name: APP_SCOPE,
  initialState,
  reducers: {
    fetchUsers: () => {},
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { fetchUsers, setUsers } = appSlice.actions;
export default appSlice;
