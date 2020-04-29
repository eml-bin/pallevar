import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

const Welcome = () => {
    return (
        <Container
            className="h-100"
        >
            <Row className="h-100 align-items-center justify-content-center">
                <Col
                    xs="auto"
                    md={6}
                    className="text-center text-master box15"
                >
                    <h1
                        className="py-3 construction"
                    >
                        ESTAMOS TRABAJANDO EN NUESTRA PÁGINA.
                        <br/>
                        ESTAMOS TRABAJANDO EN NUESTRA PÁGINA.
                        <br/>
                        ESTAMOS TRABAJANDO EN NUESTRA PÁGINA.
                    </h1   
                     
                       >
                </Col>
            </Row>
        </Container>
    )
}

export default Welcome;