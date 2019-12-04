import React from 'react';


//Equivale al Quiz
export default class Game extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    // Create objectives (One per round in the game)
    let objectives = [];
    let nQuestions = this.props.rounds.length; //Or something similar, to be determined
    for(let i = 0; i < nQuestions; i++){
      objectives.push(new Utils.Objective({id:("Round" + (i + 1)), progress_measure:(1 / nQuestions), score:(1 / nQuestions)}));
    }
    this.props.dispatch(addObjectives(objectives));
  }
  onNexRound(){
    let isLastRound = (this.props.currentRound=== this.props.game.length); //To add these props to the Redux State
    if(isLastRound === false){
      this.props.dispatch(nextQuestion()); //Something similar, to be determined
    } else {
      this.props.dispatch(finishApp(true));
    }
  }
  onResetGame(){
    this.props.dispatch(resetGame()); //Something similar, to be determined
    this.props.dispatch(resetObjectives());
  }
  render(){
    let onNextRound = this.onNextRound.bind(this); //Pending, maybe not needed
    let onResetGame = this.onResetQuiz.bind(this);
    return (
      <div>
      </div>
    );
  }
}
