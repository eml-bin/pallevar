import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const Mission = ({showModal, handleCloseModal}) => {
    return (
        <Modal show={showModal} onHide={handleCloseModal}>
            
            <Modal.Body style={{ backgroundColor: '#050505' }}>
                <h1 className="text-master">
                    Nuestra Misión
                </h1>
                <p className="text-justify" style={{ fontSize: '1.2rem' }}>
                    Llevar realidad virtual a donde no llega. Educar a la población en la facilidad de las nuevas tecnologías. Así como promover contenido de realidad virtual que no es posible ver fuera de eventos o plataformas de nicho.
                </p>
                <div className="text-center">
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cerrar
                    </Button>   
                </div>
            </Modal.Body>
            
        </Modal>
    )
}

export default Mission;