import * as types from '../actions/actionTypes';

export const chatState = {
  supplierID: null,
  messages: [],
  isOpen: false,
  chatSessionID: null,
  productID: null,
  title: null,
  socket: null,
};

const authReducer = (state = chatState, action) => {
  switch (action.type) {
    case types.TOGGLE_CHAT:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case types.START_CHAT:
      return {
        ...state,
        isOpen: true,
        chatSessionID: action.payload.chatSessionID,
        supplierID: action.payload.supplierID,
        productID: action.payload.productID,
        title: action.payload.title,
      };
    case types.CREATE_SOCKET:
      return {
        ...state,
        socket: action.payload,
      };
    case types.ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case types.END_CHAT:
      return {
        ...state,
        supplierID: null,
        messages: [],
        isOpen: false,
        chatSessionID: null,
        productID: null,
        title: null,
        socket: null,
      };
    default:
      return state;
  }
};

export default authReducer;
