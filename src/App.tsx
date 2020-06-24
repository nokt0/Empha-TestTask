import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./Components/NavigationBar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Welcome from "./Components/Welcome";
import Users from "./Components/Users";
import Login from "./Components/Login";
import {Logout} from "./Components/Logout";
import storeCreator from "./Store/store";
import {Provider} from "react-redux";


const store = storeCreator();

function App() {
    return (
        <Provider store={store}>

        <Router basename="/Empha-TestTask">
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
        </Provider>
    );
}

export default App;
