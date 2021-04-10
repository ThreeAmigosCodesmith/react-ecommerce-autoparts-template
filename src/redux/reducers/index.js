import { combineReducers } from 'redux';
import authReducer from './authReducer';
import cartReducer from './cartReducer';

const reducers = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});

export default reducers;
