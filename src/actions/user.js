import * as types from './types.js';

function setUser(data){
  return{
    type:types.LOGIN,
    data:data
  }
}

function setLogReg(data){
  return {
    type:types.SETLOGREG,
    data:data
  }
}

export {
  setUser,
  setLogReg
}
