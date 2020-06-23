import {loginReducer, usersReducer} from "../reducers";
import {
    LOGIN_ACTION,
    LoginAction,
    LoginState,
    LoginStatus,
    SET_USERS_ACTION,
    UsersAction,
    UsersFetchStatus,
    UsersState
} from "../types";
import {testUsers} from "./actions.test";

describe('reducers', () => {
    it('LOGIN_IN_PROGRESS', () => {
        const loginInitialState: LoginState = {
            loginStatus: LoginStatus.NOT_LOGGED_IN,
            loginErrorMsg: ""
        }

        const action: LoginAction = {
            type: LOGIN_ACTION,
            loginStatus: LoginStatus.LOGIN_IN_PROGRESS,
            loginErrorMsg: ""
        }
        expect(loginReducer(loginInitialState, action)).toEqual({
            ...loginInitialState,
            loginStatus: action.loginStatus,
            loginErrorMsg: action.loginErrorMsg
        })
    })

    it('SET_USERS_ACTION', () => {

        const usersInitialState: UsersState = {
            users: [],
            fetchStatus: UsersFetchStatus.NOT_FETCHED,
            fetchErrorMsg: ""
        }

        const action: UsersAction = {
            type: SET_USERS_ACTION,
            users: testUsers,
            fetchStatus: UsersFetchStatus.NOT_FETCHED,
            fetchErrorMsg: ""
        }
        expect(usersReducer(usersInitialState,action)).toEqual({
            ...usersInitialState,
            users: action.users
        })
    })
})


