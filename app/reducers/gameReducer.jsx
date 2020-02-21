import {gameSettings} from './../assets/gameSettings.js';

export default function gameReducer(state = {}, action){
  let newState;
  switch (action.type){
  case 'PLAY_CARDS':{
    newState = JSON.parse(JSON.stringify(state));
    let enemypower = gameSettings.rounds[newState.currentRound].enemycard.power;
    if (enemypower > action.payload.power){
      if(newState.health - (enemypower - action.payload.power)*25 <= 0){
        newState.finished = true;
      }else{
      newState.health = newState.health - (enemypower - action.payload.power)*25;
      }
    }else{
      newState.score = newState.score + (action.payload.power - enemypower)*100;
    }
    newState.currentRound += 1;
    newState.money = action.payload.roundmoney + newState.money;//Para comprobar que el dinero aumenta
    newState.achievements.first = true;//Para comprobar que los logros se visualizan bien
    return newState;
  }
  case 'FINISH_APP':{
    newState = JSON.parse(JSON.stringify(state));
    newState.finished = true;
    return newState;
  }
  default:
    return state;
}
}