import * as ActionTypes from './types';
import HttpWrapper from '../utils/HttpWrapper';
import {
  SIGNINFORM_UPDATE,
} from './types';

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

export const signinForm_Update = ({ prop, value }) => {
  debugger;
  return {
    type: SIGNINFORM_UPDATE,
    payload: { prop, value }
  }
}

export function SignupDetails(userdata) {
  return dispatch => {
    dispatch(BeginFunc(ActionTypes.SUBMIT_FORM_BEGIN));
    HttpWrapper('POST', '/users/signup', false, userdata)
      .then(response => {
        dispatch(SuccessFunc(ActionTypes.SUBMIT_FORM_SUCCESS, response.data));



      })

      .catch(error => {
        dispatch(ErrorFunc(ActionTypes.SUBMIT_FORM_FAILURE, error));
      });
  };
}

export function getAllUsers() {
  return dispatch => {
    HttpWrapper('GET', '/users/getAllUser', false, '')
      .then(response => {
        dispatch(SuccessFunc(ActionTypes.GET_ALL_USER, response.data.result));
})
};
}

export function getByUserId(id) {
  debugger;
  let path="/users/getIDByUser/";
  return dispatch => {
    HttpWrapper('GET', `${path}${id}`, false, id)
      .then(response => {
        debugger;
        dispatch(SuccessFunc(ActionTypes.GET_BY_USER_ID, response.data.result));
})
};
}

export function updateFunction(userdata) {
  return dispatch => {
    dispatch(BeginFunc(ActionTypes.UPDATE_FORM_BEGIN));
    HttpWrapper('POST', '/users/updateuser', false, userdata)
      .then(response => {
        dispatch(SuccessFunc(ActionTypes.UPDATE_FORM_SUCCESS, response.data));



      })

      .catch(error => {
        dispatch(ErrorFunc(ActionTypes.UPDATE_FORM_FAILURE, error));
      });
  };
}