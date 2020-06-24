import {
    LOGIN_ACTION,
    LoginAction,
    LoginState,
    LoginStatus,
    REMEMBER_ME_ACTION,
    RememberMeAction,
    SortType,
    UsersAction,
    UsersFetchStatus,
    UsersState,
    UserTableFilterAction,
    UserTableSettingsState,
    UserTableSortTypeAction
} from "./types";

const loginInitialState: LoginState = {
    loginStatus: LoginStatus.NOT_LOGGED_IN,
    loginErrorMsg: "",
    remember: false
}

const usersInitialState: UsersState = {
    users: [],
    fetchStatus: UsersFetchStatus.NOT_FETCHED,
    fetchErrorMsg: ""
}

const userTableInitialState: UserTableSettingsState = {
    sortType: SortType.ASCENDING,
    usernameFilterWord: ""
}

export function loginReducer(state = loginInitialState, action: LoginAction | RememberMeAction): LoginState {
    switch (action.type) {
        case LOGIN_ACTION:
            return {
                ...state,
                loginStatus: action.loginStatus,
                loginErrorMsg: action.loginErrorMsg
            }
        case REMEMBER_ME_ACTION:
            return {
                ...state,
                remember: action.remember
            }
        default:
            return state;
    }
}

export function usersReducer(state = usersInitialState, action: UsersAction): UsersState {
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

export function userTableSettingsReducer(state = userTableInitialState, action: UserTableFilterAction | UserTableSortTypeAction): UserTableSettingsState {
    switch (action.type) {
        case "USER_TABLE_FILTER_ACTION":
            return {
                ...state,
                usernameFilterWord: action.usernameFilterWord,
            }
        case "USER_TABLE_SORT_TYPE_ACTION":
            return {
                ...state,
                sortType: action.sortType
            }
        default:
            return state
    }
}
