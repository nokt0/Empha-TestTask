import React, {ChangeEvent, useState} from "react";
import {Button, Col, Container, Form, Jumbotron, Row} from "react-bootstrap";
import {Redirect} from 'react-router'
import {RootState} from "../Store/store";
import {useDispatch, useSelector} from "react-redux";
import {LoginStatus} from "../Store/types";
import {thunkLogin} from "../Store/thunks";
import ErrorMessage from "./ErrorMessage";

export default function Login() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false)

    const loginStatus: LoginStatus = useSelector((state: RootState) => state.login.loginStatus)
    const dispatch = useDispatch()

    function submit(event: ChangeEvent<any>) {
        event.preventDefault()
        dispatch(thunkLogin(login, password, rememberMe))
    }

    return (
        <Jumbotron className="min-vh-100 m-auto align-items-center">
            <Container>
                <Row>
                    <Col className="col-md-3 col-xl-4"/>
                    <Col md>
                        {loginStatus === LoginStatus.LOGIN_SUCCESSFUL ?
                            (<Redirect to="/users"/>)
                            : (
                                <Form onSubmit={submit}>
                                    {loginStatus === LoginStatus.LOGIN_HAS_ERRORED ? (<ErrorMessage msg="No internet"/>) : ("")}
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Login</Form.Label>
                                    {loginStatus !== LoginStatus.WRONG_CREDENTIAL ?
                                        (
                                            <Form.Control type="text" placeholder="Enter login"
                                                          onChange={(event) => setLogin(event.target.value)}/>)
                                        : (
                                            <Form.Control isInvalid type="text" placeholder="Enter login"
                                                          onChange={(event) => setLogin(event.target.value)}/>
                                        )}
                                    <Form.Control.Feedback type="invalid">Wrong login or
                                        password</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    {loginStatus !== LoginStatus.WRONG_CREDENTIAL ?
                                        (
                                            <Form.Control type="password" placeholder="Password"
                                                          onChange={(event) => setPassword(event.target.value)}/>)
                                        : (
                                            <Form.Control isInvalid type="password" placeholder="Password"
                                                          onChange={(event) => setPassword(event.target.value)}/>
                                        )}
                                    <Form.Control.Feedback type="invalid">Wrong login or
                                        password</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check
                                        onChange={(event: ChangeEvent<any>) => setRememberMe(event.target.checked)}
                                        type="checkbox"
                                        label="Check me out"/>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                            )
                        }
                    </Col>
                    <Col className="col-md-3 col-xl-4"/>
                </Row>
            </Container>
        </Jumbotron>
    )
}
