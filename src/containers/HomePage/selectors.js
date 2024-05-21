import { createSelector } from '@reduxjs/toolkit';

import { APP_SCOPE, initialState } from './reducer';

const state = (state) => state[APP_SCOPE] || initialState;

export const usersSelector = () => createSelector(state, (state) => state.users);
