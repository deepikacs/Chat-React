import * as ActionTypes from '../Actions/types';

const INPUT_STATE = {
  loading: false,
  error: null,
  msg:'',
  result:[]
};

export default (state = INPUT_STATE, action) => {
  debugger;
  switch (action.type) {
    case ActionTypes.ADD_SIGNUP_BEGIN:
      return { ...state, loading: true, error: null };
    case ActionTypes.ADD_SIGNUP_SUCCESS:
      return { ...state, loading: false, msg: action.payload.message1 }
    case ActionTypes.ADD_SIGNUP_FAILURE:
      return { ...state, loading: false, error: action.payload.message }
      
      case ActionTypes.GET_USER_BEGIN:
      return { ...state, loading: true, error: null };
    case ActionTypes.GET_USER_SUCCESS:
      return { ...state, loading: false, result: action.payload.result }
      case ActionTypes.GET_USER_FAILURE:
      return { ...state, loading: false, error: action.payload.message }

      default:
      return state;
  }
};