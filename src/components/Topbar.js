import React from 'react';
import { 
    Navbar, 
    Nav,
    Container, 
    Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/img/logo.png'
import '../assets/css/topbar.css';

const Topbar = () => {

    return (
        <Navbar 
            bg="white" 
            variant="light" 
            expand="lg"
            fixed="top"
            className="topbar"
        >
            <Navbar.Brand href="#home">
                <img
                    src={logo}
                    width="60"
                    height="30"
                    className="d-inline-block align-top"
                    alt="VR Logo"
                />
            </Navbar.Brand>
            <Button 
                className="ml-auto mr-2 btn-vr  text-white"
                size="sm"
                variant="warning "
            >
                QUIERO MI 
                <FontAwesomeIcon icon={['fas', 'vr-cardboard']}
                    size="lg" 
                    className="ml-2"
                />
            </Button>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {/* <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
                <Nav className="ml-auto">
                    <Nav.Link 
                        href="#home"
                    >
                        Inicio
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse> */}
        </Navbar>
    )
}

export default Topbar;