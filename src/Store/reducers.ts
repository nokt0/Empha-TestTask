import {LOGIN_ACTION, LoginAction, LoginState, LoginStatus} from "./types";

const loginInitialState: LoginState = {
    loginStatus: LoginStatus.NOT_LOGGED_IN,
    loginErrorMsg: ""
}

export function loginReducer(state = loginInitialState, action: LoginAction): LoginState {
    switch (action.type) {
        case LOGIN_ACTION:
            return {
                ...state,
                loginStatus: action.loginStatus,
                loginErrorMsg: action.loginErrorMsg
            }
        default:
            return state;
    }
}
