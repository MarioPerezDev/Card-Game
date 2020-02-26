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
		let powerUp = this.props.game.powerUp;
		let activePowerUp = (powerUp !== "none");
		let warning=""
		if (activePowerUp){
			warning = (<Alert variant="danger">Ya hay activado un power up, no puedes comprar más.</Alert>)
		}
		return (
			<>
				<img className="clickable" onClick={this.handleShow} src="assets/images/pendrive.png"></img>
				<Modal size="lg" show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Tienda de mejoras
							{warning}
						</Modal.Title>
					</Modal.Header>
					<Modal.Body className="modalBody shop">
						<Row className="text-center">
							<Col lg className="shopItem">
									<img className={((activePowerUp || this.props.game.powerUp === "shield" || (this.props.game.money < 20))? "grey_opacity" : "clickable")}  onClick={this.handleClose} src="assets/images/shield.png"></img>
									<Button variant="primary" onClick={() => {this.props.dispatch(buy(1));this.setState({ show: false })}} disabled={activePowerUp || this.props.game.powerUp === "shield" || (this.props.game.money < 20)}>Escudo (20 Bits)</Button>
									<p>El escudo evitará perder vida la próxima vez que te dañen. Se consume la primera vez que vayas a recibir daño.</p>
							</Col>
							<Col lg className="shopItem">
									<img className={"clickable " + ((activePowerUp || this.props.game.powerUp === "delete"  || (this.props.game.money < 40))? "grey_opacity" : "")} onClick={this.handleClose} src="assets/images/delete.png"></img>
									<Button variant="primary" onClick={() => {this.props.dispatch(buy(2));this.setState({ show: false })}} disabled={activePowerUp || this.props.game.powerUp === "delete"  || (this.props.game.money < 40)}>Eliminar carta (40 Bits)</Button>
									<p>Uar este powerUp eliminará una carta para aumentar las posibilidades de atacar con éxito. Nunca se eliminará la peor de las 3.</p>                
							</Col>
						</Row>
						<Row className="text-center">
							<Col lg className="shopItem">
									<img className={"clickable " + ((activePowerUp || this.props.game.powerUp === "x2" || (this.props.game.money < 80))? "grey_opacity" : "")} onClick={this.handleClose} src="assets/images/x2.png"></img>
									<Button variant="primary" onClick={() => {this.props.dispatch(buy(3));this.setState({ show: false })}} disabled={activePowerUp || this.props.game.powerUp === "x2" || (this.props.game.money < 80)}>Puntuación doble (80 Bits)</Button>
									<p>Esta ronda puntuarás el doble. Si no puntúas no servirá de nada, por lo que úsala cuando tengas clara la mejor opción.</p>                
							</Col>
							<Col lg className="shopItem">
									<img className={"clickable " + ((activePowerUp || this.props.game.powerUp === "skip" || (this.props.game.money < 100))? "grey_opacity" : "")} onClick={this.handleClose} src="assets/images/skip.png"></img>
									<Button variant="primary" onClick={() => {this.props.dispatch(buy(4));this.setState({ show: false })}} disabled={activePowerUp || this.props.game.powerUp === "skip" || (this.props.game.money < 100)}>Saltar Ronda (100 Bits)</Button>
									<p>Pasarás a la siguiente ronda sin perder vida, pero tus puntos se verán reducidos a la mitad, ¿Realmente deseas hacerlo?</p>          
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
