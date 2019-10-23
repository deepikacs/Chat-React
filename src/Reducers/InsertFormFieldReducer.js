import * as ActionTypes from '../Actions/types';

const INPUT_STATE = {
    name:'',
    email:'',
    hobbies:'',
    state1:'',
    city:''
  };


export default (state = INPUT_STATE, action) => {
    switch (action.type) {
  
      case ActionTypes.Dynamic_Onchange:
        return { ...state, [action.payload.prop]: action.payload.value }
      
  
      default:
        return state;
    }
  };