import React from 'react';
import * as Utils from '../vendors/Utils.js';
//  import {addObjectives, resetObjectives, finishApp} from './../reducers/actions';
import {Row, Col} from 'react-bootstrap';
import Card from './Card.jsx';
import Pop from './Pop.jsx';
import Profile from './Profile.jsx';

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
    let round = this.props.configs.rounds[currentRound];
    let ownCards = "";
    let enemyCard = "";
    let grey = "";
    if(round){
      enemyCard = <Col sm={4}><Card cardClassName={"enemyCard"} number={round.enemycard.number} name={round.enemycard.name} power={round.enemycard.power} image={round.enemycard.image} powerinfo={round.enemycard.powerinfo}/></Col>
      ownCards = (round.owncards.map((card, i) =>
        <Col sm={4} key={i}><Card cardClassName={"allyCard"} key={i} number={card.number} name={card.name} power={card.power} image={card.image} powerinfo={card.powerinfo} dispatch = {this.props.dispatch} currentRound={currentRound} configs= {this.props.configs}/></Col>
      ));}
    return (
      <div>
      Ronda {this.props.settings.currentRound + 1}
        <Row className="enemyRow">
          <Col className="avatarArea">
            <Profile pic={round.enemyPic} name ={round.enemyName} location={round.enemyLocation} health={this.props.settings.enemyHealth}></Profile>
          </Col>

          <Col xs={7}>
            <Row>
              <Col sm={4}></Col>
                {enemyCard}
              <Col sm={4}></Col>
            </Row>
          </Col>
          <Col xs={3} className="enemyDialog speech-bubble">
            Esto es una prueba Esto es una prueba Esto es una prueba Esto es una prueba Esto es una prueba Esto es una prueba Esto es una prueba Esto es una prueba
            Esto es una prueba Esto es una pruebaEsto es una prueba  Esto es una prueba Esto es una prueba Esto es una prueba Esto es una prueba Esto es una prueba Esto es una prueba Esto es una prueba Esto es una prueba
            Esto es una prueba Esto es una pruebaEsto es una prueba Esto es una pruebaEsto es una pruebaEsto es una prueba vEsto es una pruebaEsto es una prueba Esto es una prueba
          </Col>
          </Row>

          <Row className="allyRow">
            <Col className="avatarArea">
              <Profile pic={round.enemyPic} name ={round.enemyName} location={round.enemyLocation} health={this.props.settings.enemyHealth}></Profile>
            </Col>
            <Col xs={7}>
              <Row>
                  {ownCards}
                  {console.log(grey)}
              </Row>  
            </Col>
            <Col xs={3} className="menuArea">
              <Row>
                <Col className="downloadArea text-center">
                  <img src="http://icon-library.com/images/usb-icon-png/usb-icon-png-24.jpg"></img>
                  <p>Descargar mejoras</p>
                </Col>
              </Row>
              <Row className="ribbonArea">
                <Col>
                <img className={grey} src="https://cdn0.iconfinder.com/data/icons/sport-achievment-badges/128/sport_badges-02-512.png"></img>
                </Col>
                <Col>
                <img className={grey} src="https://c7.uihere.com/icons/959/399/726/achievement-549ff9c1cae4c0b9020f3e40d2aef945.png"></img>
                </Col>
                <Col>
                <img className={grey} src="https://pngimage.net/wp-content/uploads/2018/05/achievement-icon-png-9.png"></img>
                </Col>
              </Row>
            </Col>
          </Row>
          <Pop></Pop>
      </div>

    );
  }
}
