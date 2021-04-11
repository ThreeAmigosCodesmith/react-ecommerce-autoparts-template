/* eslint-disable no-underscore-dangle */
import * as types from '../actions/actionTypes';

export const InitialState = {
  msg: '',
  type: '',
  aws_s3_image_url: '',
};

const imageReducer = (state = InitialState, action) => {
  switch (action.type) {
    case types.SET_AWS_S3_IMAGE_URL:
      return {
        ...state,
        ...{ aws_s3_image_url: action.url },
      };

    case types.RESPONSE:
      return {
        ...state,
        ...{ msg: action.data._res, type: action.data._type },
      };
    default:
      return state;
  }
};

export default imageReducer;
