import React from 'react';
import {Row, Col, Container,ProgressBar} from 'react-bootstrap';

export default class Profile extends React.Component {
  render(){
    let enemyHealthType = "";
    if(this.props.health > 50) {
      enemyHealthType = "success"
    } else {
      if(this.props.health > 20){
        enemyHealthType = "warning"
      } else {
        enemyHealthType = "danger"
      }
    }
    return (
        <Container>
        <Row>
        <img className="enemyPic" src={this.props.pic} alt="cardimage"/>
        </Row>
        <Row className="avatarText">
        <Col>
          <p>
          Enemigo: {this.props.name}
          </p>
          <p>
          Localización: {this.props.location}
          </p>
          <p>
          Vida restante: {this.props.health}
          </p>
          <ProgressBar variant={enemyHealthType} now={this.props.health} />
          </Col>
        </Row>
        </Container>
    );
  }
}