/* eslint-disable no-case-declarations */
export const initialState = {
  cart: [],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case 'REMOVE_FROM_CART':
      const index = state.cart.findIndex((cartItem) => cartItem.id === action.id);
      const newCart = [...state.cart];
      if (index >= 0) {
        newCart.splice(index, 1);
      }
      return {
        ...state,
        cart: newCart,
      };
    case 'AUTH_USER':
      return {
        ...state,
        user: action.item,
      };
    case 'UNAUTH_USER':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
