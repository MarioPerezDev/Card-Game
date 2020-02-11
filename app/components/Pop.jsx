import React from 'react';
import {Modal, Button} from 'react-bootstrap';

export default class Pop extends React.Component {
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
				<Button variant="primary" onClick={this.handleShow}>
					Launch demo modal
        </Button>

				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
					</Modal.Header>
					<Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={this.handleClose}>
							Close
            </Button>
						<Button variant="primary" onClick={this.handleClose}>
							Save Changes
            </Button>
					</Modal.Footer>
				</Modal>
			</>
		);
	}
}
