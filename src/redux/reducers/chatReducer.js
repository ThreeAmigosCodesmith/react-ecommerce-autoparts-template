import * as types from '../actions/actionTypes';

export const chatState = {
  supplierID: null,
  messages: [],
  isOpen: false,
  chatSessionID: null,
  productID: null,
  title: null,
  socket: null,
  allChats: [],
};

const authReducer = (state = chatState, action) => {
  switch (action.type) {
    case types.TOGGLE_CHAT:
      return {
        ...state,
        isOpen: !state.isOpen,
        messages: [],
      };
    case types.START_CHAT:
      return {
        ...state,
        isOpen: true,
        customerID: action.payload?.customerID,
        chatSessionID: action.payload.chatSessionID,
        supplierID: action.payload.supplierID,
        productID: action.payload?.productID || null,
        title: action.payload?.title || null,
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
    case types.ADD_CHATS:
      return {
        ...state,
        allChats: action.payload,
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
