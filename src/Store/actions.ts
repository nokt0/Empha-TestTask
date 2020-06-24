import {
    LOGIN_ACTION,
    LoginAction,
    LoginStatus,
    REMEMBER_ME_ACTION,
    SET_USERS_ACTION,
    SortType,
    USER_TABLE_FILTER_ACTION,
    USER_TABLE_SORT_TYPE_ACTION,
    UsersAction,
    UsersFetchStatus,
    UserTableFilterAction,
    UserTableSortTypeAction
} from "./types";
import User from "./Model/User";

export function setLoginStatus(status: LoginStatus, errorMsg = ""): LoginAction {
    return {
        type: LOGIN_ACTION,
        loginStatus: status,
        loginErrorMsg: errorMsg
    }
}

export function setUsers(usersArray: User[], status: UsersFetchStatus, message = ""): UsersAction {
    return {
        type: SET_USERS_ACTION,
        users: usersArray,
        fetchStatus: status,
        fetchErrorMsg: message
    }
}

export function changeUserTableFilter(filter: string): UserTableFilterAction {
    return {
        type: USER_TABLE_FILTER_ACTION,
        usernameFilterWord: filter
    }
}

export function changeUserTableSortType(sort: SortType): UserTableSortTypeAction {
    return {
        type: USER_TABLE_SORT_TYPE_ACTION,
        sortType: sort
    }
}

export function setRememberMe(rem: boolean) {
    return {
        type: REMEMBER_ME_ACTION,
        remember: rem
    }
}


