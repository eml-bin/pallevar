import React from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';

const Welcome = () => {

    return (
      <Container className="h-100 animated fadeIn">
        <Row 
            className="h-100 align-items-center justify-content-center "
        >
            <Col
                xs="auto"
                md={6}
                className="text-center text-master box15"
            >
                <h1
                    className="construction pt-2 px-2"
                >
                    EXPLORA EL FESTIVAL
                </h1>
                <a href="https://platform.vrparallevar.com/" target="new">
                    <Button variant="vr" className="mb-3">
                        Ir al Festival
                    </Button>
                </a>
            </Col>
        </Row>
      </Container>
    )
}

export default Welcome;