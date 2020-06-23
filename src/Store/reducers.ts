import {LOGIN_ACTION, LoginAction, LoginState, LoginStatus, UsersAction, UsersState} from "./types";

const loginInitialState: LoginState = {
    loginStatus: LoginStatus.NOT_LOGGED_IN,
    loginErrorMsg: ""
}

const usersInitialState: UsersState = {
    users: []
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

export function usersReducer(state = usersInitialState, action: UsersAction) {
    switch (action.type) {
        case "SET_USERS_ACTION":
            return {
                ...state,
                users: action.users
            }
        default:
            return state
    }

}
