import {LOGIN_ACTION, LoginAction, LoginStatus} from "./types";

export function setLoginStatus(status: LoginStatus, errorMsg = ""): LoginAction {
    return {
        type: LOGIN_ACTION,
        loginStatus: status,
        loginErrorMsg: errorMsg
    }
}
