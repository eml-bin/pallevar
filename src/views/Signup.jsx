import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
// import { Auth } from "aws-amplify";
import { Container, Row, Col, Form } from 'react-bootstrap';

import { useAppContext } from '../libs/context';
import { useFormFields } from "../libs/hooks";
import { onError } from "../libs/errorHandler";
import LoaderButton from '../components/LoaderButton';


const Signup = () => {

    const [fields, handleFieldChange] = useFormFields({
        email: '',
        password: '',
        confirmPassword: '',
        confirmationCode: ''
    })

    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();
    const [newUser, setNewUser] = useState(null);
    const { userHasAuthenticated } = useAppContext();

    const validateForm = () => {
        return (
            fields.email.length > 0 &&
            fields.password.length > 0 &&
            fields.password === fields.confirmPassword
        );
    }

    const validateConfirmatioForm = () => {
        return fields.confirmationCode.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();

        setIsLoading(true);

        try {
            // const newUser = await Auth.signUp({
            //     username: fields.email,
            //     password: fields.password
            // });
            setIsLoading(false);
            setNewUser(newUser)
        } catch (e) {
            setIsLoading(false);
            onError(e);
        }
    }

    async function handleConfirmationSubmit(event) {
        event.preventDefault()

        setIsLoading(true)

        try {
            // await Auth.confirmSignUp(fields.email, fields.confirmationCode);
            // await Auth.signIn(fields.email, fields.password);
            userHasAuthenticated(true);
            history.push("/");
        } catch (e) {
            setIsLoading(false);
            onError(e);
        }
    }

    const renderConfirmationForm = () => (
        <Form onSubmit={handleConfirmationSubmit}>
            <Form.Group controlId="confirmationCode"> 
                <Form.Label className="h5">
                    Código de Confirmación
                </Form.Label>
                <br />
                <code className="p-1 font-weight-bold">
                    *Por favor, revisa tu correo para el código
                </code>
                <Form.Control
                    autoFocus
                    type="tel"
                    onChange={handleFieldChange}
                    value={fields.confirmationCode}
                />
            </Form.Group>
            <LoaderButton
                block
                type="submit"
                isLoading={isLoading}
                className="mb-2" 
                variant="vr"
                disabled={!validateConfirmatioForm()}
            >
                Verificar
            </LoaderButton>
        </Form>
    )

    const renderForm = () => (
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
            <Form.Group controlId="confirmPassword">
                <Form.Label className="h5">
                    Confirmar Password
                </Form.Label>
                <Form.Control
                    type="password"
                    onChange={handleFieldChange}
                    value={fields.confirmPassword}
                />
            </Form.Group>
            <LoaderButton
                block
                type="submit"
                isLoading={isLoading}
                className="mb-2" 
                variant="vr"
                disabled={!validateForm()}
            >
                Registrarme
            </LoaderButton>
        </Form>
    )

    return (
        <Container className="h-100 animated fadeIn">
            <Row className="h-100 align-items-center justify-content-center">
                <Col xs="auto" className="box p-4">
                    { newUser === null ? renderForm() : renderConfirmationForm()}
                </Col>
            </Row>
        </Container>
    )
}

export default Signup;