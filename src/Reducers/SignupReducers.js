import * as ActionTypes from '../Actions/types';

const INPUT_STATE = {
  loading: false,
  error: null,
  signupmessage:''
};

export default (state = INPUT_STATE, action) => {
  switch (action.type) {
    case ActionTypes.ADD_SIGNUP_BEGIN:
      return { ...state, loading: true, error: null };
    case ActionTypes.ADD_SIGNUP_SUCCESS:
      return { ...state, loading: false,signupmessage:action.payload.message1 }
    case ActionTypes.ADD_SIGNUP_FAILURE:
      return { ...state, loading: false, error: action.payload.message }
    default:
      return state;
  }
};