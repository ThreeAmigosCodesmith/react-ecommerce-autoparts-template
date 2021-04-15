import { combineReducers } from 'redux';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import imageReducer from './imageReducer';
<<<<<<< HEAD
// import productReducer from './productReducer';
=======
import chatReducer from './chatReducer';
import productsReducer from './productsReducer';
>>>>>>> 677413cc54e7674a8d75608ad1fa657756b8f309

const reducers = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  image: imageReducer,
  chat: chatReducer,
  products: productsReducer,
});

export default reducers;
