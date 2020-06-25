import {Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'
import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../Store/store";
import {LoginStatus} from "../Store/types";
import logo from "../logo.svg";

export default function NavigationBar() {

    const selectLoginStatus = (state: RootState) => state.login.loginStatus
    const loginStatus: any = useSelector(selectLoginStatus)

    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <LinkContainer to="/" exact={true}>
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        width="150"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/users">
                        <Nav.Link href="#link">Users List</Nav.Link>
                    </LinkContainer>


                </Nav>

                <Nav className="justify-content-end">
                    {loginStatus === LoginStatus.LOGIN_SUCCESSFUL ?
                        (
                            <LinkContainer to="/logout">
                                <Nav.Link href="#login">Logout</Nav.Link>
                            </LinkContainer>
                        ) :
                        (
                            <LinkContainer to="/login">
                                <Nav.Link href="#login">Login</Nav.Link>
                            </LinkContainer>
                        )}

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
