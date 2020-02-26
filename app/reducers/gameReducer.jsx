import {gameSettings} from './../assets/gameSettings.js';

export default function gameReducer(state = {}, action){
  let newState;
  switch (action.type){
  case 'PLAY_CARDS':{
    newState = JSON.parse(JSON.stringify(state));
    let currentRound = gameSettings.rounds[newState.currentRound];
    let enemypower = currentRound.enemyCard.power;
    let powers = [];
    for (let i=0; i < currentRound.ownCards.length;i++){
      powers.push(currentRound.ownCards[i].power)
    }
    if (enemypower > action.payload.power){
      if(newState.health - (enemypower - action.payload.power)*25 <= 0){
        newState.finished = true;
      }else{
      newState.health = newState.health - (enemypower - action.payload.power)*25;
      }
    }else{
      newState.score = newState.score + (action.payload.power - enemypower)*100;
      if(action.payload.power === Math.max(...powers)){
        newState.money = newState.money + (action.payload.power - enemypower)*30
      }
    }
    newState.powerUp = "none"
    newState.currentRound += 1;

    // newState.achievements.first = true; El logro se pone en color  
    return newState;
  }
  case 'BUY':{
    newState = JSON.parse(JSON.stringify(state));
    switch (action.payload.index){
      case 1:
        newState.money = newState.money - 20;
        newState.powerUp = "shield";
        break;
      case 2:
        newState.money = newState.money - 40;
        newState.powerUp = "delete";
        break;
      case 3:
        newState.money = newState.money - 80;
        newState.powerUp = "x2";
        break;
      case 4:
        newState.money = newState.money - 100;
        newState.powerUp = "skip";
        break;
    }
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