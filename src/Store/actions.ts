import {
    CHANGE_USER_TABLE_FILTER,
    LOGIN_ACTION,
    LoginAction,
    LoginStatus,
    SET_USERS_ACTION,
    SortType, USER_TABLE_FILTER_ACTION, USER_TABLE_SORT_TYPE_ACTION,
    UsersAction,
    UsersFetchStatus
} from "./types";
import User from "./Model/User";

export function setLoginStatus(status: LoginStatus, errorMsg = ""): LoginAction {
    return {
        type: LOGIN_ACTION,
        loginStatus: status,
        loginErrorMsg: errorMsg
    }
}

export function setUsers(users: User[], status: UsersFetchStatus, message = ""): UsersAction {
    return {
        type: SET_USERS_ACTION,
        users: users,
        fetchStatus: status,
        fetchErrorMsg: message
    }
}

export function changeUserTableFilter(filter: string) {
    return {
        type: USER_TABLE_FILTER_ACTION,
        usernameFilterWord: filter
    }
}

export function changeUserTableSortType(sortType: SortType) {
    return {
        type: USER_TABLE_SORT_TYPE_ACTION,
        sortType: sortType
    }
}


