import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {playCard, finishApp, objectiveAccomplished} from '../reducers/actions';


export default class Card extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    let objective = this.props.objective;
    let dispatchFunction;
    let damage = this.props.power - this.props.enemypower;
    if (this.props.dispatchable){
      dispatchFunction = () => {
        this.props.dispatch(objectiveAccomplished(objective.id, damage, this.props.currentPowerUp)); 
        (this.props.currentRound + 1 < this.props.configs.rounds.length)? this.props.dispatch(playCard(this.props.power)) :this.props.dispatch(finishApp(true))
      }
    }else{
      dispatchFunction = () =>{
        alert(this.props.I18n.getTrans("i.disabledCard"))
      };
    }
    return (
      <div className={this.props.cardClassName+ " card"} onClick={dispatchFunction}>
        <Container>
        <Row xs={2} style={{marginTop:"5px"}}>
          <Col id="number" className="card-number">
            {this.props.number}
          </Col>
          <Col xs={8} className="card-name">
            {this.props.name}
          </Col>
          <Col xs={2} className="card-power">
            {this.props.power}
          </Col>
        </Row>
        <Row className="card-image">
          <Col>
            <img src={this.props.image} alt="cardimage"/>
          </Col>
        </Row>
        <Row className="card-power-text">
          <Col>
            {this.props.powerinfo}
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}
