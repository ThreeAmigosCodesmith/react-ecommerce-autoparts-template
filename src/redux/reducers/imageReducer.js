/* eslint-disable no-underscore-dangle */
import * as types from '../actions/actionTypes';

export const InitialState = {
  msg: '',
  type: '',
  imageUrls: [],
};

const imageReducer = (state = InitialState, action) => {
  switch (action.type) {
    case types.ADD_IMAGE_URL:
      // eslint-disable-next-line no-console
      console.log(action.url);
      return {
        ...state,
        ...{ imageUrls: [...state.imageUrls, action.url] },
      };

    case types.RESPONSE:
      return {
        ...state,
        ...{ msg: action.data._res, type: action.data._type },
      };
    // case types.UPLOAD_IMAGE:
    //   return {
    //     ...state,
    //     ...{ }
    //   }
    default:
      return state;
  }
};

export default imageReducer;
