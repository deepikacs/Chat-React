import * as ActionTypes from './types';
import HttpWrapper from '../utils/HttpWrapper';
import browserHistory from '../utils/browserHistory';
import {HIDE_MSG} from "./types";

export function BeginFunc(ActionType) {
  return { type: ActionType }
}

export function SuccessFunc(ActionType, result) {
  return {
    type: ActionType,
    payload: result
  }
}

export function ErrorFunc(ActionType, error) {
  return {
    type: ActionType,
    payload: { error }
  }
}

export function submitSignup(userdata) {
  debugger;
  return dispatch => {
    dispatch(BeginFunc(ActionTypes.ADD_SIGNUP_BEGIN));
    HttpWrapper('POST', '/users/signup', false, userdata)
      .then(response => {
        dispatch(SuccessFunc(ActionTypes.ADD_SIGNUP_SUCCESS, response.data));
        
        setTimeout(function() {
          browserHistory.push('/');
        }, 2000);
        
      })
      
      .catch(error => {
        dispatch(ErrorFunc(ActionTypes.ADD_SIGNUP_FAILURE, error));
      });
  };
}

export function userInformation() {
  debugger;
  return dispatch => {

    dispatch(BeginFunc(ActionTypes.GET_USER_BEGIN));
    HttpWrapper('GET','/users/getall', false, '')
      .then(response => {
        dispatch(SuccessFunc(ActionTypes.GET_USER_SUCCESS, response.data));
        console.log(response);
        
      })
      .catch(error => {
        dispatch(ErrorFunc(ActionTypes.GET_USER_FAILURE, error));
      });
};
}

