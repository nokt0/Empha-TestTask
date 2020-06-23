import {LOGIN_ACTION, LoginAction, LoginStatus, SET_USERS_ACTION, UsersAction, UsersState} from "./types";
import User from "./Model/User";

export function setLoginStatus(status: LoginStatus, errorMsg = ""): LoginAction {
    return {
        type: LOGIN_ACTION,
        loginStatus: status,
        loginErrorMsg: errorMsg
    }
}


export function setUsers(users: User[]): UsersAction {
    return {
        type: SET_USERS_ACTION,
        users: users
    }
}
