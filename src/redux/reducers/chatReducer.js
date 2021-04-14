import * as types from '../actions/actionTypes';

export const chatState = {
  user: null,
  supplier: null,
  chats: [],
  isOpen: false,
};

const authReducer = (state = chatState, action) => {
  switch (action.type) {
    case types.TOGGLE_CHAT:
      // eslint-disable-next-line no-console
      console.log('reducer: ', action.payload);
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};

export default authReducer;
