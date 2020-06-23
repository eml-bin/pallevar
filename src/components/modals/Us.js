import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const Us = ({showModal, handleCloseModal}) => {
    return (
        <Modal show={showModal} onHide={handleCloseModal}>
            
            <Modal.Body style={{ backgroundColor: '#050505' }}>
                <h1 className="text-master">
                    Acerca de Nosotros
                </h1>
                <p className="text-justify" style={{ fontSize: '1.2rem' }}>
                    Tras las medidas de prevención aplicadas por la pandemia de COVID-19 el mundo fue forzado a permanecer en casa. 
                    VR Para Llevar surge en reacción a esto y la necesidad de crear nuevas maneras de pasar el tiempo encerrados. 
                    La imposibilidad de convivencia y la monotonía de nuestra casa nos hace desear vivir en otra realidad. 
                    <br/>
                    <br/>
                    La realidad virtual fue por mucho tiempo algo muy caro y difícil de usar. 
                    El contenido estaba limitado a videojuegos o simulaciones de montañas rusas. 
                    Actualmente hay incontables experiencias, historias, interactivas, animadas, documental, la realidad virtual es un mundo nuevo y es accesible para todos.
                    VR Para Llevar crea una nueva plataforma con contenido para google cardboard lo que permite a cualquier persona con un celular ver contenido 360. 
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

export default Us;