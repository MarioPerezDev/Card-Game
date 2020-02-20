import * as temp from './../assets/gameSettings.js';

function gameReducer(state = {}, action){
  let newState;
  switch (action.type){
  case 'PLAY_CARDS':{
    newState = JSON.parse(JSON.stringify(state));
    let enemypower = temp.rounds[newState.currentRound].enemycard.power;
    newState.health = newState.health - (action.payload.damage*10 - enemypower);
    newState.currentRound += 1;
    newState.money = action.payload.roundmoney + newState.money;//Para comprobar que el dinero aumenta
    newState.achievements.first = true;//Para comprobar que los logros se visualizan bien
    return newState;
  }
  default:
    return state;
}
}

export default gameReducer;
