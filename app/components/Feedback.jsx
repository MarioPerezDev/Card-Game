import React from 'react';
import './../assets/scss/initial_screen.scss';
import {Button, Col} from 'react-bootstrap';
import {next, objectiveAccomplished} from '../reducers/actions';


export default class Feedback extends React.Component {
render(){
    return (
        <Col xs={10}>
            <div className="feedback">
            <h1>Aquí iria el feedback.</h1>
            <p>{this.props.feedback.best}</p>
            <Button variant="primary" onClick={() => {
                if(this.props.game.powerUp==="skip"){
                this.props.dispatch(objectiveAccomplished(this.props.objective.id, 0, this.props.game.powerUp))
            } 
                this.props.dispatch(next())}}>Siguiente</Button>
            </div>
        </Col>
    );
  }
}