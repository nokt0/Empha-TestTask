import {loginReducer, usersReducer} from "../reducers";
import {LOGIN_ACTION, LoginAction, LoginState, LoginStatus, SET_USERS_ACTION, UsersAction, UsersState} from "../types";
import User from "../Model/User";

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
        const users: User[] = [{
            id:1,
            username:"sd",
            first_name:"fname",
            last_name:"lname",
            password:"2231ga",
            is_active:true,
            last_login:"12-01-2020",
            is_superuser:false
        }];

        const usersInitialState: UsersState = {
            users: []
        }

        const action: UsersAction = {
            type: SET_USERS_ACTION,
            users: users
        }
        expect(usersReducer(usersInitialState,action)).toEqual({
            ...usersInitialState,
            users: action.users
        })
    })
})


