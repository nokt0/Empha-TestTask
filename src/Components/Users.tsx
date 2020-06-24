import React from "react";
import {Jumbotron} from "react-bootstrap";
import {TableMenu} from "./TableMenu";
import UsersTable from "./UsersTable";
import {useSelector} from "react-redux";
import {RootState} from "../Store/store";
import {LoginStatus} from "../Store/types";
import {Redirect} from "react-router-dom";

export default function Users() {
    const loginStatus: LoginStatus = useSelector((state: RootState) => state.login.loginStatus)

    // dispatch(thunkFetchUsers())

    return (
        <div>
            <Jumbotron className=" min-vh-100 align-items-center">
                {loginStatus === LoginStatus.LOGIN_SUCCESSFUL ?
                    (<div>
                        <TableMenu/>
                        <UsersTable/>
                    </div>) :
                    (<Redirect to="/login"/>)}
            </Jumbotron>
        </div>)
}
