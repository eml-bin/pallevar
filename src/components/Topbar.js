import React from 'react';
import { 
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
            expand="lg"
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
            <a href="https://vr-para-llevar.myshopify.com/" target="new">
                <Button 
                    className="ml-auto mr-2"
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
        </Navbar>
    )
}

export default Topbar;