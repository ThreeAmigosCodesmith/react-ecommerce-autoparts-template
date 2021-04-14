import { combineReducers } from 'redux';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import imageReducer from './imageReducer';
import chatReducer from './chatReducer';

const reducers = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  image: imageReducer,
  chat: chatReducer,
});

export default reducers;
