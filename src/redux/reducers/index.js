import { combineReducers } from 'redux';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import imageReducer from './imageReducer';
import chatReducer from './chatReducer';
import productsReducer from './productsReducer';

const reducers = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  image: imageReducer,
  chat: chatReducer,
  products: productsReducer,
});

export default reducers;
