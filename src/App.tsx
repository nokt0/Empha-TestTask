import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./Components/NavigationBar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Welcome from "./Components/Welcome";
import Users from "./Components/Users";
import Login from "./Components/Login";
import {Logout} from "./Components/Logout";

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
                <Route exact path="/logout">
                    <Logout/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
