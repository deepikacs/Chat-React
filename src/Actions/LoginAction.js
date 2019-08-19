import * as ActionTypes from './types';
import HttpWrapper from '../utils/HttpWrapper';
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
    payload: error
  }
}



export function submitLogin(logindata) {
  return dispatch => {

    dispatch(BeginFunc(ActionTypes.FETCH_LOGIN_BEGIN));
    HttpWrapper('POST', '/users/login', false, logindata)
      .then(response => {
        dispatch(SuccessFunc(ActionTypes.FETCH_LOGIN_SUCCESS, response.data));
        console.log(response)
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userid', response.data.userId);
        browserHistory.push('/dashboard');
      })
      .catch(error => {
        dispatch(ErrorFunc(ActionTypes.FETCH_LOGIN_FAILURE, error.response.data));
      });
    
};
}

// export function SearchDetails(searchdata) {
//   debugger;
//   return dispatch => {

//     dispatch(BeginFunc(ActionTypes.FETCH_SEARCH_BEGIN));
//     HttpWrapper('POST','/users/search', false, searchdata)
//       .then(response => {
//         dispatch(SuccessFunc(ActionTypes.FETCH_SEARCH_SUCCESS, response.data));
//         console.log(response);
        
//       })
      
   
// };
// }