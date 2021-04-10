/* eslint-disable no-case-declarations */
import * as types from '../actions/actionTypes';

export const initialState = {
  cart: [],
  user: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case types.REMOVE_FROM_CART:
      const index = state.cart.findIndex((cartItem) => cartItem.id === action.id);
      const newCart = [...state.cart];
      if (index >= 0) {
        newCart.splice(index, 1);
      }
      return {
        ...state,
        cart: newCart,
      };
    case types.EMPTY_CART:
      return {
        cart: [],
        ...state,
      };
    default:
      return state;
  }
};

export default cartReducer;
