/* eslint-disable no-case-declarations */
/* eslint-disable no-underscore-dangle */
import * as types from '../actions/actionTypes';

export const InitialState = {
  imageUrls: [],
};

const imageReducer = (state = InitialState, action) => {
  switch (action.type) {
    case types.ADD_IMAGE_URL:
      return {
        ...{ imageUrls: [...state.imageUrls, action.url] },
      };
    case types.DELETE_IMAGE_URL:
      const copy = state.imageUrls.slice();
      copy.splice(action.index, 1);
      // eslint-disable-next-line no-console
      console.log(state.imageUrls);
      return {
        ...{ imageUrls: [...copy] },
      };
    default:
      return state;
  }
};

export default imageReducer;
