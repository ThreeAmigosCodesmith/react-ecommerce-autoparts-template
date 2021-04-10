import * as types from './actionTypes';

export const addToCart = (item) => ({
  type: types.ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (item) => ({
  type: types.REMOVE_FROM_CART,
  payload: item,
});

export const emptyCart = (item) => ({
  type: types.EMPTY_CART,
  payload: item,
});

export const addOrder = (order) => ({
  type: types.ADD_ORDER,
  payload: order,
});
