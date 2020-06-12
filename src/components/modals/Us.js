import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const Us = ({showModal, handleCloseModal}) => {
    return (
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
            <Modal.Title>Modsdsadsadding</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
                Cerrar
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Us;