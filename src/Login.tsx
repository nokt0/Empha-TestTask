import React from "react";
import {Button, Col, Container, Form, Jumbotron, Row} from "react-bootstrap";
import {StyleSheet, css} from 'aphrodite';


export default function Login() {
    return (
        <Jumbotron className="min-vh-100 m-auto align-items-center">
            <Container>
                <Row>
                    <Col className="col-md-3 col-xl-4"/>
                    <Col md><Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out"/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </Col>
                    <Col className="col-md-3 col-xl-4"/>
                </Row>
            </Container>
        </Jumbotron>


    )
}

const styles = StyleSheet.create({
    fullHeight: {
        height: '100vh',
    }
});
