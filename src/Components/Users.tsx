import React from "react";
import {Container, Jumbotron} from "react-bootstrap";
import {TableMenu} from "./TableMenu";
import UsersTable from "./UsersTable";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../Store/store";
import {LoginStatus} from "../Store/types";
import {Redirect} from "react-router-dom";
import {thunkFetchUsers} from "../Store/thunks";

export default function Users() {
    const loginStatus: LoginStatus = useSelector((state: RootState) => state.login.loginStatus)
    const dispatch = useDispatch();
    dispatch(thunkFetchUsers())

    return (
        <div>
            <Jumbotron className="min-vh-100 align-items-center">
                <Container>
                    {loginStatus === LoginStatus.LOGIN_SUCCESSFUL ?
                        (<div>
                            <TableMenu/>
                            <UsersTable/>
                        </div>) :
                        (<Redirect to="/login"/>)}
                </Container>
            </Jumbotron>
        </div>)
}
