import React from 'react';
import {Modal, Row, Col, Button, Alert} from 'react-bootstrap';
import {buy} from '../reducers/actions';


export default class Shop extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			show: false,
		};
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

	render() {
		//Checks if there is any powerUp already active.
		let powerUps = this.props.game.powerUps;
		let activePowerUp = (powerUps.first || powerUps.second || powerUps.third || powerUps.forth);
		let warning=""
		if (activePowerUp){
			warning = (<Alert variant="danger">Ya hay activado un power up, no puedes comprar más.</Alert>)
		}
		return (
			<>
				<img className="clickable" onClick={this.handleShow} src="http://icon-library.com/images/usb-icon-png/usb-icon-png-24.jpg"></img>
				<Modal size="lg" show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title className="text-center">Tienda de mejoras
							{warning}
						</Modal.Title>
					</Modal.Header>
					<Modal.Body className="modalBody">
						<Row className="text-center">
							<Col lg>
									<img className={"clickable " + ((activePowerUp || this.props.game.powerUps.first || (this.props.game.money < 20))? "grey" : "")}  onClick={this.handleClose} src="https://pngimage.net/wp-content/uploads/2018/05/achievement-icon-png-9.png"></img>
									<Button variant="primary" onClick={() => {this.props.dispatch(buy(1));this.setState({ show: false })}} disabled={activePowerUp || this.props.game.powerUps.first || (this.props.game.money < 20)}>Comprar mejora (20 Bits)</Button>
									<p>Esta es una mejora que ayudará a ganar la partida. Puedes utilizarla en cualquier momento. Estoy alargando el texto para ver cómo se vería.</p>
							</Col>
							<Col lg>
									<img className={"clickable " + ((activePowerUp || this.props.game.powerUps.second || (this.props.game.money < 40))? "grey" : "")} onClick={this.handleClose} src="https://pngimage.net/wp-content/uploads/2018/05/achievement-icon-png-9.png"></img>
									<Button variant="primary" onClick={() => {this.props.dispatch(buy(2));this.setState({ show: false })}} disabled={activePowerUp || this.props.game.powerUps.second || (this.props.game.money < 40)}>Comprar mejora (40 Bits)</Button>
									<p>Esta es una mejora que ayudará a ganar la partida. Puedes utilizarla en cualquier momento. Estoy alargando el texto para ver cómo se vería.</p>                
							</Col>
						</Row>
						<Row className="text-center">
							<Col lg>
									<img className={"clickable " + ((activePowerUp || this.props.game.powerUps.third || (this.props.game.money < 80))? "grey" : "")} onClick={this.handleClose} src="https://pngimage.net/wp-content/uploads/2018/05/achievement-icon-png-9.png"></img>
									<Button variant="primary" onClick={() => {this.props.dispatch(buy(3));this.setState({ show: false })}} disabled={activePowerUp || this.props.game.powerUps.third || (this.props.game.money < 80)}>Comprar mejora (80 Bits)</Button>
									<p>Esta es una mejora que ayudará a ganar la partida. Puedes utilizarla en cualquier momento. Estoy alargando el texto para ver cómo se vería.</p>                
							</Col>
							<Col lg>
									<img className={"clickable " + ((activePowerUp || this.props.game.powerUps.forth || (this.props.game.money < 100))? "grey" : "")} onClick={this.handleClose} src="https://pngimage.net/wp-content/uploads/2018/05/achievement-icon-png-9.png"></img>
									<Button variant="primary" onClick={() => {this.props.dispatch(buy(4));this.setState({ show: false })}} disabled={activePowerUp || this.props.game.powerUps.forth || (this.props.game.money < 100)}>Comprar mejora (100 Bits)</Button>
									<p>Esta es una mejora que ayudará a ganar la partida. Puedes utilizarla en cualquier momento. Estoy alargando el texto para ver cómo se vería.</p>          
							</Col>
						</Row>

					</Modal.Body>
					<Modal.Footer className="shopFooter">
						Seleccione una mejora para comprarla, gastando los bits de descarga indicados.
					</Modal.Footer>
				</Modal>
			</>
		);
	}
}
