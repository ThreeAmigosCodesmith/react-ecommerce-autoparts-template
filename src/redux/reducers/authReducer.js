import * as types from '../actions/actionTypes';

export const userState = {
  user: null,
};

const authReducer = (state = userState, action) => {
  switch (action.type) {
    case types.AUTH_USER:
      // eslint-disable-next-line no-console
      console.log('reducer: ', action.payload);
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
