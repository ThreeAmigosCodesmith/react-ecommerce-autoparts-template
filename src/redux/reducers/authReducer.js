import * as types from '../actions/actionTypes';

export const userState = {
  user: null,
  userRole: null,
};

const authReducer = (state = userState, action) => {
  switch (action.type) {
    case types.AUTH_USER:
      return {
        ...state,
        user: action.payload,
      };
    case types.SET_USER_ROLE:
      return {
        ...state,
        userRole: action.payload,
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
