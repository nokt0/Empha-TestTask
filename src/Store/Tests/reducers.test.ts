import {
    loginInitialState,
    loginReducer,
    usersInitialState,
    usersReducer,
    userTableInitialState,
    userTableSettingsReducer
} from "../reducers";
import {
    LOGIN_ACTION,
    LoginAction,
    LoginStatus,
    SET_USERS_ACTION,
    UsersAction,
    UsersFetchStatus,
    UserTableFilterAction
} from "../types";
import {testUsers} from "./actions.test";

describe('reducers', () => {
    it('LOGIN_REDUCER', () => {

        const action: LoginAction = {
            type: LOGIN_ACTION,
            loginStatus: LoginStatus.LOGIN_IN_PROGRESS,
            loginErrorMsg: "",
        }
        expect(loginReducer(loginInitialState, action)).toEqual({
            ...loginInitialState,
            loginStatus: action.loginStatus,
            loginErrorMsg: action.loginErrorMsg
        })
    })

    it('USERS REDUCER', () => {

        const action: UsersAction = {
            type: SET_USERS_ACTION,
            users: testUsers,
            fetchStatus: UsersFetchStatus.NOT_FETCHED,
            fetchErrorMsg: ""
        }
        expect(usersReducer(usersInitialState, action)).toEqual({
            ...usersInitialState,
            users: action.users
        })
    })

    it('USER TABLE SETTINGS REDUCER', () => {
        const action: UserTableFilterAction = {
            type: "USER_TABLE_FILTER_ACTION",
            usernameFilterWord: "user"
        }
        expect(userTableSettingsReducer(userTableInitialState, action)).toEqual({
            ...userTableInitialState,
            usernameFilterWord: action.usernameFilterWord
        })
    })
})


