import React from 'react';
import { 
    Nav,
    Navbar,
    Button } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/img/logo.png'
import '../assets/css/topbar.css';

const Topbar = () => {

    return (
        <Navbar 
            bg="transparent"
            expand="*"
            fixed="top"
            className="topbar"
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
                <Nav>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Topbar;