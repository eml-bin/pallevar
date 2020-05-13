import React from "react";
import { Container, Col, Row } from 'react-bootstrap'; 

const NotFound = () => {
    return (
      <Container className="h-100">
        <Row className="h-100 align-items-center justify-content-center animated fadeIn">
            <Col xs="auto" md={6} className="text-center text-light">
                <h1>404. Not found</h1>
            </Col>
        </Row> 
      </Container>

    )
}

export default NotFound