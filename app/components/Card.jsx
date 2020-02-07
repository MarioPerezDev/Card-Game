import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';

export default class Card extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    let cardClassName = "card";
    /*
    if (algo que se active al hacerle click){
    cardClassName += " selected"
  }
    */
    return (
      <div className={cardClassName}>
        <Container>
        <Row style={{marginTop:"5px"}}>
          <Col id="number" className="card-number">
            {this.props.number}
          </Col>
          <Col xs={8} className="card-name">
            {this.props.name}
          </Col>
          <Col className="card-power">
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
