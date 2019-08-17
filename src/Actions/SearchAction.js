import * as ActionTypes from './types';
import HttpWrapper from '../utils/HttpWrapper';

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
    payload: error
  }
}




export function SearchDetails(searchdata) {
  debugger;
  return dispatch => {

    dispatch(BeginFunc(ActionTypes.FETCH_SEARCH_BEGIN));
    HttpWrapper('POST','/users/searchdata', false, searchdata)
      .then(response => {
        dispatch(SuccessFunc(ActionTypes.FETCH_SEARCH_SUCCESS, response.data));
        console.log(response);
        
      })
      .catch(error => {
        dispatch(ErrorFunc(ActionTypes.FETCH_SEARCH_FAILURE, error));
      });
};
}



