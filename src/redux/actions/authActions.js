import * as types from './actionTypes';

export const authUser = (user) => ({
  type: types.AUTH_USER,
  payload: user,
});

export const unauthUser = (user) => ({
  type: types.UNAUTH_USER,
  payload: user,
});

export const deleteUser = (user) => ({
  type: types.DELETE_USER,
  payload: user,
});
