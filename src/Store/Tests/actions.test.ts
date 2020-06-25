import {changeUserTableFilter, changeUserTableSortType, setLoginStatus, setRememberMe, setUsers} from "../actions";
import {
    LOGIN_ACTION,
    LoginStatus,
    REMEMBER_ME_ACTION,
    SET_USERS_ACTION,
    SortType,
    USER_TABLE_FILTER_ACTION,
    USER_TABLE_SORT_TYPE_ACTION,
    UsersFetchStatus
} from "../types";
import User from "../Model/User";

export const testUsers: User[] = [{
    id: 1,
    username: "sd",
    first_name: "fname",
    last_name: "lname",
    password: "2231ga",
    is_active: true,
    last_login: "12-01-2020",
    is_superuser: false
}];

describe('Sync Actions', () => {
    it('SET_USERS_ACTION', () => {

        const action = {
            type: SET_USERS_ACTION,
            users: testUsers,
            fetchErrorMsg: "",
            fetchStatus: UsersFetchStatus.FETCHED_SUCCESSFUL
        }
        expect(setUsers(testUsers, UsersFetchStatus.FETCHED_SUCCESSFUL)).toEqual(action)
    })

    it('LOGIN_ACTION', () => {
        const action = {
            type: LOGIN_ACTION,
            loginStatus: LoginStatus.LOGIN_SUCCESSFUL,
            loginErrorMsg: ""
        }

        expect(setLoginStatus(action.loginStatus, action.loginErrorMsg))
    })

    it('USER_TABLE_FILTER_ACTION', () => {
        const action = {
            type: USER_TABLE_FILTER_ACTION,
            usernameFilterWord: "fad"
        }

        expect(changeUserTableFilter(action.usernameFilterWord)).toEqual(action)
    })

    it('USER_TABLE_SORT_TYPE_ACTION', () => {
        const action = {
            type: USER_TABLE_SORT_TYPE_ACTION,
            sortType: SortType.ASCENDING
        }

        expect(changeUserTableSortType(action.sortType)).toEqual(action)
    })

    it('REMEMBER_ME_ACTION', () => {
        const action = {
            type: REMEMBER_ME_ACTION,
            remember: true
        }

        expect(setRememberMe(action.remember)).toEqual(action)
    })
})


