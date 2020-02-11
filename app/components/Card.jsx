import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {newRound} from '../reducers/actions';

export default class Card extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    //let cardClassName = "card"; (De momento se usa el que te llega)
    /*
    if (algo que se active al hacerle click){
    cardClassName += " selected"
  }
    */
    return (
      <div className={this.props.cardClassName+ " card"} onClick={() => {if(this.props.currentRound + 1 < this.props.configs.rounds.length){this.props.dispatch(newRound(this.props.power));}}}>
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
