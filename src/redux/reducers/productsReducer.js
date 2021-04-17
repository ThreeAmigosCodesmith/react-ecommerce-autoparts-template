import * as types from '../actions/actionTypes';

export const productsState = {
  homePage: [],
  catalog: [],
  inventory: [],
};

const productsReducer = (state = productsState, action) => {
  switch (action.type) {
    case types.LOAD_HOME_PAGE:
      return { ...state, homePage: action.payload };
    case types.LOAD_CATALOG:
      return { ...state, catalog: action.payload };
    case types.ADD_INVENTORY:
      return { ...state, inventory: action.payload };
    default:
      return state;
  }
};

export default productsReducer;
