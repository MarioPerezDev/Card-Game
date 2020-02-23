import React from 'react';
import * as Utils from '../vendors/Utils.js';
import {addObjectives} from './../reducers/actions';
import {Row, Col} from 'react-bootstrap';
import Card from './Card.jsx';
import Shop from './Shop.jsx';
import Profile from './Profile.jsx';

//  Equivale al Quiz
export default class Game extends React.Component {
  componentDidMount(){
    // Create objectives (One per round in the game)
    let objectives = [];
    let nQuestions = this.props.configs.rounds.length;
    for(let i = 0; i < nQuestions; i++){
      objectives.push(new Utils.Objective({id:("Round" + (i + 1)), progress_measure:(1 / nQuestions), score:(1 / nQuestions)}));
    }
    this.props.dispatch(addObjectives(objectives));
  }
  render(){
    let currentRound = this.props.game.currentRound;
    let round = this.props.configs.rounds[currentRound];
    let objective = this.props.tracking.objectives["Round" + (currentRound + 1)];
    let ownCards = "";
    let enemyCard = "";
    if(round){
      enemyCard = <Col sm={4}><Card cardClassName={"enemyCard"} number={round.enemyCard.number} name={round.enemyCard.name} power={round.enemyCard.power} image={round.enemyCard.image} powerinfo={round.enemyCard.powerinfo}/></Col>
      ownCards = (round.ownCards.map((card, i) =>
        <Col sm={4} key={i}><Card cardClassName={"allyCard"} key={i} tracking={this.props.tracking} number={card.number} name={card.name} power={card.power} image={card.image} powerinfo={card.powerinfo} objective={objective} dispatch = {this.props.dispatch} currentRound={currentRound} configs= {this.props.configs}/></Col>
      ));}
    return (
      <div>
      Ronda {currentRound + 1}
        <Row className="enemyRow">
          <Col className="avatarArea">
            <Profile type="enemy" pic={round.enemyPic} name ={round.enemyName} location={round.enemyLocation}></Profile>
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
              <Profile type="ally" pic={round.enemyPic} name ={this.props.user_profile.name} location={round.enemyLocation} health={this.props.game.health}></Profile>
            </Col>
            <Col xs={7}>
              <Row>
                  {ownCards}
              </Row>  
            </Col>
            <Col xs={3} className="menuArea">
              <Row>
                <Col className="downloadArea text-center">
                  <Row>               
                    <Col className="moneyText">
                    <p>Bits disponibles:</p>
                    <p>{this.props.game.money}</p>
                    </Col>
                    <Col>
                    <Shop dispatch={this.props.dispatch}></Shop>
                    <p>Descargar mejoras</p>
                    </Col> 
                  </Row>
                </Col>
              </Row>
              <Row className="ribbonArea">
                <Col>
                <img className={this.props.game.achievements.first ? "" : "grey"} src="https://cdn0.iconfinder.com/data/icons/sport-achievment-badges/128/sport_badges-02-512.png"></img>
                </Col>
                <Col>
                <img className={this.props.game.achievements.second ? "" : "grey"} src="https://c7.uihere.com/icons/959/399/726/achievement-549ff9c1cae4c0b9020f3e40d2aef945.png"></img>
                </Col>
                <Col>
                <img className={this.props.game.achievements.third ? "" : "grey"} src="https://pngimage.net/wp-content/uploads/2018/05/achievement-icon-png-9.png"></img>
                </Col>
              </Row>
            </Col>
          </Row>

      </div>

    );
  }
}
