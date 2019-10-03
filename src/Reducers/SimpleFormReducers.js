import * as ActionTypes from '../Actions/types';

const INPUT_STATE = {
  loading: false,
  error: null,
  name:'',
  email:'',
  password:'',
  getAllUserList:[],
  getUserById:'',
  msg:''
};

export default (state = INPUT_STATE, action) => {
  debugger;
  switch (action.type) {

    case ActionTypes.SIGNINFORM_UPDATE:
    return {...state, [action.payload.prop]:action.payload.value}
    case ActionTypes.SUBMIT_FORM_BEGIN:
      return { ...state, loading: true, error: null };
    case ActionTypes.SUBMIT_FORM_SUCCESS:
      return { ...state, loading: false,msg:action.payload }
    case ActionTypes.SUBMIT_FORM_FAILURE:
      return { ...state, loading: false, error: action.payload.error}

      case ActionTypes.GET_ALL_USER:
        return {...state,loading:false,getAllUserList:action.payload}

        case ActionTypes.GET_BY_USER_ID:
            return {...state,loading:false,getUserById:action.payload}


            case ActionTypes.UPDATE_FORM_BEGIN:
              return { ...state, loading: true, error: null };
            case ActionTypes.UPDATE_FORM_SUCCESS:
              return { ...state, loading: false,msg:action.payload }
            case ActionTypes.UPDATE_FORM_FAILURE:
              return { ...state, loading: false, error: action.payload.error}   
      
      default:
      return state;
  }
};