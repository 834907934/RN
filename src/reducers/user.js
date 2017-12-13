import * as TYPES from '../actions/types';

const initialState={
  username:null,
  password:null,
  logToggle:false,
  regToggle:false,
}

export default function user(state=initialState,action){
  switch(action.type){
    case TYPES.LOGIN:
     return {
       ...state,
       username:action.data
     }
     case TYPES.SETLOGREG:
      return{
        ...state,
        logToggle:action.data.logToggle,
        regToggle:action.data.regToggle
      }
     default:
      return state;
  }
}
