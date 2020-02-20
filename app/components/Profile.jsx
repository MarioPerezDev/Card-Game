import React from 'react';
import {Row, Col, Container,ProgressBar} from 'react-bootstrap';

export default class Profile extends React.Component {
  render(){
    let healthType = "";
    let name = "";
    let health ="";
    if(this.props.health > 50) {
      healthType = "success"
    } else {
      if(this.props.health > 20){
        healthType = "warning"
      } else {
        healthType = "danger"
      }
    }
    if(this.props.type === "ally"){
      name = "Defensor: " + this.props.name;
      health = <div><p>Vida restante: {this.props.health}</p><ProgressBar variant={healthType} now={this.props.health}/></div>
    } else {
      if (this.props.type === "enemy"){
        name= "Atacante: " + this.props.name;
      }
    }
    return (
        <Container>
        <Row className="text-center">
          <Col>
          <img className="enemyPic" src={this.props.pic} alt="cardimage"/>
          </Col>
        </Row>
        <Row className="avatarText">
        <Col>
          <p>
            {name}
          </p>
          <p>
          Localización: {this.props.location}
          </p>
          {health}
          </Col>
        </Row>
        </Container>
    );
  }
}