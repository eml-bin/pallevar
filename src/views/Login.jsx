import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
// import { Auth } from "aws-amplify";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

import { useFormFields } from "../libs/hooks";
import { onError } from "../libs/errorHandler";
import { useAppContext } from '../libs/context';
import LoaderButton from '../components/LoaderButton'

const Login = () => {

    const [fields, handleFieldChange] = useFormFields({
        email: "",
        password: ""
    })

    const history = useHistory();
    const { userHasAuthenticated } = useAppContext();
    const [isLoading, setIsLoading] = useState(false);

    function validateForm() {
        return fields.email.length > 0 && fields.email.length > 0
    }

    async function handleSubmit(event) {
        event.preventDefault()
        setIsLoading(true)
        try {
            // await Auth.signIn(fields.email, fields.email)
            userHasAuthenticated(true)
            history.push("/")
        } catch(e) {
            setIsLoading(false)
            onError(e)
        }
    }


    return (
        <Container className="h-100 animated fadeIn">
            <Row className="h-100 align-items-center justify-content-center">
                <Col xs="auto" className="box p-4">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="email"> 
                            <Form.Label className="h5">
                                Email
                            </Form.Label>
                            <Form.Control
                                autoFocus
                                type="email"
                                onChange={handleFieldChange}
                                value={fields.email}
                                />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label className="h5">
                                Password
                            </Form.Label>
                            <Form.Control
                                type="password"
                                onChange={handleFieldChange}
                                value={fields.password}
                                />
                        </Form.Group>
                        <LoaderButton 
                            block
                            className="mb-2" 
                            variant="vr"
                            type="submit"
                            isLoading={isLoading}
                            disabled={!validateForm()} 
                        >
                            Entrar
                        </LoaderButton>
                        <Link 
                            to="/signup"
                            className="text-light float-right"
                        >
                            ¿NO TIENES CUENTA?
                        </Link>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
} 

export default Login