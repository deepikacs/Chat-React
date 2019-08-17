import { combineReducers } from 'redux';
import LoginReducers from './LoginReducers';
import SignupReducers from './SignupReducers';
import SearchReducers from './SearchReducers';


export default combineReducers({
  LoginReducers,
  SignupReducers,
  SearchReducers
});