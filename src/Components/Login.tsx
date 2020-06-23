import React, {ChangeEvent, useState} from "react";
import {Button, Col, Container, Form, Jumbotron, Row} from "react-bootstrap";
import {Redirect} from 'react-router'
import {RootState} from "../Store/store";
import {useDispatch, useSelector} from "react-redux";
import {LoginStatus} from "../Store/types";
import {thunkLogin} from "../Store/thunks";

export default function Login(props: any) {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const selectLoginStatus = (state: RootState) => state.login.loginStatus
    const loginStatus: any = useSelector(selectLoginStatus)
    const dispatch = useDispatch()

    function submit(event: ChangeEvent<any>) {
        event.preventDefault()
        dispatch(thunkLogin(login, password))
    }

    return (
        <Jumbotron className="min-vh-100 m-auto align-items-center">
            <Container>
                <Row>
                    <Col className="col-md-3 col-xl-4"/>
                    <Col md>
                        {loginStatus === LoginStatus.LOGIN_SUCCESSFUL ?
                            (<Redirect to="/users"/>)
                            : (<Form onSubmit={submit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Login</Form.Label>
                                    <Form.Control type="text" placeholder="Enter login"
                                                  onChange={(event) => setLogin(event.target.value)}/>
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password"
                                                  onChange={(event) => setPassword(event.target.value)}/>
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out"/>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>)
                        }
                    </Col>
                    <Col className="col-md-3 col-xl-4"/>
                </Row>
            </Container>
        </Jumbotron>
    )
}
