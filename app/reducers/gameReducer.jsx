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
    newState.currentRound += 1;

    newState.achievements.first = true;//Para comprobar que los logros se visualizan bien
    return newState;
  }
  case 'BUY_ITEM':{
    alert("Hola, has comprado el poder" + action.payload.index);
  }
  return state;
  case 'FINISH_APP':{
    newState = JSON.parse(JSON.stringify(state));
    newState.finished = true;
    return newState;
  }
  default:
    return state;
}
}