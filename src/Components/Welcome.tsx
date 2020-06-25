import React from "react";
import {Button, Container, Jumbotron} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {useSelector} from "react-redux";
import {RootState} from "../Store/store";
import {LoginStatus} from "../Store/types";


export default function Welcome() {
    const loginStatus: any = useSelector((state: RootState) => state.login.loginStatus)

    return (
        <Jumbotron className="min-vh-100 m-auto align-items-center">
            <Container className="text-center">
                <h1 className="display-3">Welcome To My SPA</h1>
                <h2 className="lead">You can log in and see the list of users from the emphasoft server</h2>
                {loginStatus !== LoginStatus.LOGIN_SUCCESSFUL ?
                    <LinkContainer to="/login"><Button>Login</Button></LinkContainer>
                    : ""}
            </Container>
        </Jumbotron>
    )

}
