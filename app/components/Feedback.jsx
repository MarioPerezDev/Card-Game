import React from 'react';
import './../assets/scss/initial_screen.scss';
import {Button, Col} from 'react-bootstrap';
import {next} from '../reducers/actions';


export default class Feedback extends React.Component {
render(){
    return (
        <Col xs={10}>
            <h1>Aquí iria el feedback.</h1>
            <Button variant="primary" onClick={() => {this.props.dispatch(next())}}>Siguiente</Button>
        </Col>
    );
  }
}