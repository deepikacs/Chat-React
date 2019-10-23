import * as ActionTypes from './types';
import HttpWrapper from '../utils/HttpWrapper';
import {
  SIGNINFORM_UPDATE,
} from './types';
import browserHistory from '../utils/browserHistory';

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
  return {
    type: SIGNINFORM_UPDATE,
    payload: { prop, value }
  }
}

export function SignupDetails(userdata) {
  // let loading_status = true;
  
// return dispatch({ type: LOADING, payload: loading_status  });

  return dispatch => {
    dispatch(BeginFunc(ActionTypes.SUBMIT_FORM_BEGIN));
    // setTimeout(function() {
      // console.log('in action');
        HttpWrapper('POST', '/users/simpleformsubmit', false, userdata)
        .then(response => {
          console.log(response.data);
          setTimeout(function(){
          dispatch(SuccessFunc(ActionTypes.SUBMIT_FORM_SUCCESS, response.data));
        },2000)
        })


        .catch(error => {
          console.log(error);
          dispatch(ErrorFunc(ActionTypes.SUBMIT_FORM_FAILURE, error));
        });
    // }, 5000);
    // console.log("Action")
    
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
  let path="/users/getIDByUser/";
  return dispatch => {
    HttpWrapper('GET', `${path}${id}`, false, id)
      .then(response => {
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
          browserHistory.push('/simpleform');


      })

      .catch(error => {
        dispatch(ErrorFunc(ActionTypes.UPDATE_FORM_FAILURE, error));
      });
  };
}