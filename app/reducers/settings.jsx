import { combineReducers } from 'redux';

function hola(state = "", action){
  switch (action.type){
  case 'HOLA':
    return "Algo";
  default:
    return state;
  }
}

function currentRound(state = 0, action){
  switch (action.type){
  case 'RONDA':
    return state + 1;
  default:
    return state;
  }
}

const settings = (combineReducers({
hola,
currentRound
}));

export default settings;
