import React from "react";
import {Container, Jumbotron} from "react-bootstrap";


export default function Welcome() {
    return (
        <Jumbotron className="min-vh-100 m-auto align-items-center">
            <Container className="text-center">
                <h1 className="display-3">Welcome To My SPA</h1>
                <h2 className="lead">You can log in and see the list of users from the emphasoft server</h2>
            </Container>
        </Jumbotron>
    )

}
