import { combineReducers } from 'redux';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import imageReducer from './imageReducer';
import productReducer from './productReducer';

const reducers = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  image: imageReducer,
  prod: productReducer,
});

export default reducers;
