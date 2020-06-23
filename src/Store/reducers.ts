import {LOGIN_ACTION, LoginAction, LoginState, LoginStatus, UsersAction, UsersFetchStatus, UsersState} from "./types";

const loginInitialState: LoginState = {
    loginStatus: LoginStatus.NOT_LOGGED_IN,
    loginErrorMsg: ""
}

const usersInitialState: UsersState = {
    users: [],
    fetchStatus: UsersFetchStatus.NOT_FETCHED,
    fetchErrorMsg: ""
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
                users: action.users,
                fetchStatus: action.fetchStatus
            }
        default:
            return state
    }

}
