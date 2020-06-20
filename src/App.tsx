import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css';
import NavigationBar from "./NavigationBar";
import {BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams} from "react-router-dom";
import {Button, Form, FormControl, Nav, Navbar, Container, NavDropdown} from "react-bootstrap";
import Welcome from "./Welcome";
import Login from "./Login";
import Users from "./Users";

function App() {
    return (
        <Router>
            <NavigationBar/>
            <Switch>
                <Route exact path="/">
                    <Welcome/>
                </Route>
                <Route exact path="/login">
                    <Login/>
                </Route>
                <Route exact path="/users">
                    <Users/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
