import React from 'react';
import * as Utils from '../vendors/Utils.js';
//  import {addObjectives, resetObjectives, finishApp} from './../reducers/actions';
import {Button} from 'react-bootstrap';
import {hola, newRound} from '../reducers/actions';
import Card from './Card.jsx';

//  Equivale al Quiz
export default class Game extends React.Component {
  componentDidMount(){
    // Create objectives (One per round in the game)
    let objectives = [];
    let nQuestions = this.props.configs.rounds.length; // Or something similar, to be determined
    for(let i = 0; i < nQuestions; i++){
      objectives.push(new Utils.Objective({id:("Round" + (i + 1)), progress_measure:(1 / nQuestions), score:(1 / nQuestions)}));
    }
  //  this.props.dispatch(addObjectives(objectives));
  }
  render(){
    let currentRound = this.props.settings.currentRound;
    console.log(this.props)
    let round = this.props.configs.rounds[currentRound];
    let appCards = "";
    if(round){
      appCards = (round.owncards.map((card, i) =>
        <span className="column1" key={i}><Card key={i} number={card.number} name={card.name} power={card.power} image={card.image} powerinfo={card.powerinfo} /></span>
      ));}
    return (
      <div>
      Ronda {this.props.settings.currentRound + 1}
        {appCards}
        {//  Esto que está asociado a los botones deberá ir asociado al hacer click a cualquier carta.
        }
        <Button onClick={() => {if(currentRound + 1 < this.props.configs.rounds.length){this.props.dispatch(newRound());}}} variant="primary">Primary</Button>;
        <Button onClick={() => {this.props.dispatch(hola())}} variant="secondary">Secondary</Button>
      </div>

    );
  }
}
