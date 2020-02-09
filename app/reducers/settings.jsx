import { combineReducers } from 'redux';

function health(state = 100, action){
  switch (action.type){
  case 'ROUND':
    return state - action.payload.damage;
  default:
    return state;
  }
}

function currentRound(state = 0, action){
  switch (action.type){
  case 'ROUND':
    return state + 1;
  default:
    return state;
  }
}

const settings = (combineReducers({
health,
currentRound
}));

export default settings;
