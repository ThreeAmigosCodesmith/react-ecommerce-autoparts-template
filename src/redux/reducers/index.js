import { combineReducers } from 'redux';
import authReducer from './authReducer';
// import all reducers here
import cartReducer from './cartReducer';

// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  auth: authReducer,
  cart: cartReducer,
});

// make the combined reducers available for import
export default reducers;
