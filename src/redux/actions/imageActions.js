import * as types from './actionTypes';

export const uploadImage = (photo) => ({
  type: types.UPLOAD_IMAGE,
  photo,
});

export const addImageUrl = (url) => ({
  type: types.ADD_IMAGE_URL,
  url,
});

export const response = (res, type) => ({
  type: types.RESPONSE,
  data: { _res: res, _type: type },
});
