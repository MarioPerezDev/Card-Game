import React from 'react';
import * as Utils from '../vendors/Utils.js';
//import {addObjectives, resetObjectives, finishApp} from './../reducers/actions';


//Equivale al Quiz
export default class Game extends React.Component {
  componentDidMount(){
    // Create objectives (One per round in the game)
    let objectives = [];
    let nQuestions = this.props.game.rounds.length; //Or something similar, to be determined
    for(let i = 0; i < nQuestions; i++){
      objectives.push(new Utils.Objective({id:("Round" + (i + 1)), progress_measure:(1 / nQuestions), score:(1 / nQuestions)}));
    }
  //  this.props.dispatch(addObjectives(objectives));
  }
  render(){
    return (
      <div>
      Hola
      </div>
    );
  }
}
