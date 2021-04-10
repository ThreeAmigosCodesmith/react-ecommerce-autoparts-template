import * as types from '../actions/actionTypes';

export const initialState = {
  cart: [],
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (types) {
    case types.AUTH_USER:
      return {
        ...state,
        user: action.payload,
      };
    case types.UNAUTH_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
