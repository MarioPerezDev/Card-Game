import React from 'react';
import * as Utils from '../vendors/Utils.js';
//  import {addObjectives, resetObjectives, finishApp} from './../reducers/actions';
import {Row, Col, Container} from 'react-bootstrap';
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
    let ownCards = "";
    let enemyCard = "";

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
            <Container>
            <Row>
            <img className="enemyPic" src="https://thenypost.files.wordpress.com/2017/12/171205-hacking-experts-beginning-feature.jpg?quality=80&strip=all&w=618&h=410&crop=1" alt="cardimage"/>
            </Row>
            <Row className="avatarText">
            <Col>
              <p>
              Enemigo: Dimitri
              </p>
              <p>
              Vida restante: {this.props.settings.ownHealth}
              </p>
              </Col>
            </Row>
            </Container>
          </Col>

          <Col xs={7}>
            <Row>
              <Col sm={4}></Col>
                {enemyCard}
              <Col sm={4}></Col>
            </Row>
          </Col>
          <Col xs={3} className="prueba">
            <img className="enemyPic" src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/settings-512.png" alt="cardimage"/>
          </Col>
          </Row>

          <Row className="allyRow">
            <Col className="avatarArea">
              <img className="enemyPic" src="https://thenypost.files.wordpress.com/2017/12/171205-hacking-experts-beginning-feature.jpg?quality=80&strip=all&w=618&h=410&crop=1" alt="cardimage"/>
              Vida restante: {this.props.settings.ownHealth}
            </Col>
            <Col xs={7}>
              <Row>
                  {ownCards}
              </Row>
            </Col>
            <Col xs={3} className="prueba">
              <img className="enemyPic" src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/settings-512.png" alt="cardimage"/>
            </Col>
          </Row>
      </div>

    );
  }
}
