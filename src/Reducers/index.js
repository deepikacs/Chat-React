import { combineReducers } from 'redux';
import LoginReducers from './LoginReducers';
import SignupReducers from './SignupReducers';
import SearchReducers from './SearchReducers';
import SimpleFormReducers from './SimpleFormReducers';
import InsertFormFieldReducer from './InsertFormFieldReducer';


export default combineReducers({
  LoginReducers,
  SignupReducers,
  SearchReducers,
  SimpleFormReducers,
  InsertFormFieldReducer
});