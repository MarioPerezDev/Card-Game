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
  getMiddle(ownCards){
    let powers = ownCards.map((card)=> card.power);

    let ismiddle = (element) => (element !== Math.max(...powers)) && (element !== Math.min(...powers))
    
    return powers.findIndex(ismiddle);
  }
  render(){
    //Useful variables
    let currentRound = this.props.game.currentRound;
    let round = this.props.configs.rounds[currentRound];
    let objective = this.props.tracking.objectives["Round" + (currentRound + 1)];
    let powerUp = this.props.game.powerUp;

    let ownCards = "";
    let enemyCard = "";
    let currentPowerUp ="";


    if(round){
      let middleIndex = "";
      enemyCard = <Col sm={4}><Card cardClassName={"enemyCard"} number={round.enemyCard.number} dispatchable={false} name={round.enemyCard.name} power={round.enemyCard.power} image={round.enemyCard.image} powerinfo={round.enemyCard.powerinfo}/></Col>
      if(powerUp ==="delete"){
      middleIndex = this.getMiddle(round.ownCards);
      }
      ownCards = (round.ownCards.map((card, i) =>
      {
        if(i === middleIndex){
        return( <Col sm={4} key={i}><Card cardClassName={"allyCard deleted"} key={i} tracking={this.props.tracking} dispatchable={false} number={card.number} name={card.name} power={card.power} image={card.image} powerinfo={card.powerinfo} objective={objective} dispatch = {this.props.dispatch} currentRound={currentRound} configs= {this.props.configs}/></Col>
        )}
        else{
          return (<Col sm={4} key={i}><Card cardClassName={"allyCard"} key={i} tracking={this.props.tracking} dispatchable={true} number={card.number} name={card.name} power={card.power} image={card.image} powerinfo={card.powerinfo} objective={objective} dispatch = {this.props.dispatch} currentRound={currentRound} configs= {this.props.configs}/></Col>
          )}
      }
      ));}

    if (powerUp){
      if(powerUp !== "none"){
      currentPowerUp = (
        <div className ="currentPowerUp">
        <p>PowerUp activo:</p>
        <img src={"assets/images/"+ powerUp + ".png"}></img>
        </div>
      )   
      }   
    }
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
              <Profile type="ally" pic={round.enemyPic} name ={this.props.user_profile.name} location={round.enemyLocation} health={this.props.game.health} score={this.props.game.points}></Profile>
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
                    {currentPowerUp}
                    <p>Bits disponibles:</p>
                    <p className="money">{this.props.game.money}</p>
                    </Col>
                    <Col>
                    <Shop dispatch={this.props.dispatch} game={this.props.game}></Shop>
                    <p>Descargar mejoras</p>
                    </Col> 
                  </Row>
                </Col>
              </Row>
              <Row className="ribbonArea">
                <Col>
                <img className={this.props.game.achievements.first ? "" : "grey"} src="assets/images/medal.png"></img>
                </Col>
                <Col>
                <img className={this.props.game.achievements.second ? "" : "grey"} src="assets/images/money.png"></img>
                </Col>
                <Col>
                <img className={this.props.game.achievements.third ? "" : "grey"} src="assets/images/winner.png"></img>
                </Col>
              </Row>
            </Col>
          </Row>

      </div>

    );
  }
}
