import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'
import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../Store/store";
import {LoginStatus} from "../Store/types";

export default function NavigationBar() {

    const selectLoginStatus = (state: RootState) => state.login.loginStatus
    const loginStatus: any = useSelector(selectLoginStatus)

    return (
        <Navbar bg="light" expand="md">
            <LinkContainer to="/" exact={true}>
                <Navbar.Brand href="/">Emphasoft</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/users">
                        <Nav.Link href="#link">Users List</Nav.Link>
                    </LinkContainer>

                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
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