import * as ActionTypes from '../Actions/types';

const INPUT_STATE = {
  loading: false,
  error: null,
  name: '',
  email: '',
  password: '',
  getAllUserList: [],
  getUserById: '',
  msg: '',
  formSubmitMsg:'',
  loadingform:''
};

export default (state = INPUT_STATE, action) => {
  switch (action.type) {

    case ActionTypes.SIGNINFORM_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value }
    case ActionTypes.SUBMIT_FORM_BEGIN:
      return { ...state, loading: true,loading1:true,error: null };
    case ActionTypes.SUBMIT_FORM_SUCCESS:
      return { ...state, loading: false,loading1:false, formSubmitMsg: action.payload.message }
    case ActionTypes.SUBMIT_FORM_FAILURE:
      return { ...state, loading: false, error: action.payload.error }

    case ActionTypes.GET_ALL_USER:
      return { ...state, loading: false, getAllUserList: action.payload }

    case ActionTypes.GET_BY_USER_ID:
      return { ...state, loading: false, getUserById: action.payload }


    case ActionTypes.UPDATE_FORM_BEGIN:
      return { ...state, loading: true, error: null };
    case ActionTypes.UPDATE_FORM_SUCCESS:
      return { ...state, loading: false, msg: action.payload }
    case ActionTypes.UPDATE_FORM_FAILURE:
      return { ...state, loading: false, error: action.payload.error }

    
      // case ActionTypes.LOADING:
      //   return {
      //     ...state,
      //     [action.payload.loadingform]: action.payload.loading_status
      //   };

      default:
      return state;
  }
};