import React from 'react';
import { 
    Nav,
    Navbar,
    Button } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/img/logo.png'
import '../assets/css/topbar.css';

const Topbar = ({ showUs, }) => {

    return (
        <Navbar 
            bg="transparent"
            expand="*"
            variant="dark"
            fixed="top"
            className="topbar text-white"
        >
            <LinkContainer to="/">
                <Navbar.Brand>
                    <img
                        src={logo}
                        width="80"
                        height="40"
                        className="d-inline-block align-top"
                        alt="VR Logo"
                    />
                </Navbar.Brand>
            </LinkContainer>
            <a className="ml-auto" href="https://vr-para-llevar.myshopify.com/" target="new">
                <Button 
                    className="mr-2"
                    size="sm"
                    variant="vr"
                    >
                    QUIERO MI 
                    <FontAwesomeIcon icon={['fas', 'vr-cardboard']}
                        size="lg" 
                        className="ml-2"
                        />
                </Button>
            </a>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto text-right" style={{ width: '20%' }}>
                    <a href="/" className="text-master py-2" onClick={void(0)}>
                        Programa
                    </a>
                    <a href="/" className="text-master py-2" onClick={void(0)}>
                        Nosotros
                    </a>
                    <a href="/" className="text-master py-2" onClick={void(0)}>
                        Misión
                    </a>
                    <a href="/" className="text-master py-2" onClick={void(0)}>
                        Contacto
                    </a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Topbar;
