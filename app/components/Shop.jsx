import React from 'react';
import {Modal, Row, Col} from 'react-bootstrap';

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
		return (
			<>
        <img className="clickable" onClick={this.handleShow} src="http://icon-library.com/images/usb-icon-png/usb-icon-png-24.jpg"></img>
				<Modal size="lg" show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Tienda de mejoras</Modal.Title>
					</Modal.Header>
					<Modal.Body className="modalBody">
            <Row className="text-center">
              <Col lg>
				<img className="clickable" onClick={this.handleClose} src="https://pngimage.net/wp-content/uploads/2018/05/achievement-icon-png-9.png"></img>
				<p>Esta es una mejora que ayudará a ganar la partida. Puedes utilizarla en cualquier momento. Estoy alargando el texto para ver cómo se vería.</p>
              </Col>
              <Col lg>
				<img className="clickable" onClick={this.handleClose} src="https://pngimage.net/wp-content/uploads/2018/05/achievement-icon-png-9.png"></img>
				<p>Esta es una mejora que ayudará a ganar la partida. Puedes utilizarla en cualquier momento. Estoy alargando el texto para ver cómo se vería.</p>              </Col>
            </Row>
            <Row className="text-center">
              <Col lg>
				<img className="clickable" onClick={this.handleClose} src="https://pngimage.net/wp-content/uploads/2018/05/achievement-icon-png-9.png"></img>
				<p>Esta es una mejora que ayudará a ganar la partida. Puedes utilizarla en cualquier momento. Estoy alargando el texto para ver cómo se vería.</p>              </Col>
              <Col lg>
				<img className="clickable" onClick={this.handleClose} src="https://pngimage.net/wp-content/uploads/2018/05/achievement-icon-png-9.png"></img>
				<p>Esta es una mejora que ayudará a ganar la partida. Puedes utilizarla en cualquier momento. Estoy alargando el texto para ver cómo se vería.</p>              </Col>
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
