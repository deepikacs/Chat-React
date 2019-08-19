import * as ActionTypes from '../Actions/types';

const INPUT_STATE = {
  loading: false,
  error: null,
  message:'',
  srcInfo:''
};

export default (state = INPUT_STATE, action) => {
  switch (action.type) {
   case ActionTypes.FETCH_SEARCH_BEGIN:
    return { ...state, loading: true, error: null };
   case ActionTypes.FETCH_SEARCH_SUCCESS:
    return { ...state, loading: false,message:action.payload.message,srcInfo:action.payload.result.username}
  case ActionTypes.FETCH_SEARCH_FAILURE:
    return { ...state, loading: false, error: action.payload}
  
    default:
    return state;
  }
};