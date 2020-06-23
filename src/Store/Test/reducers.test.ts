import {loginReducer} from "../reducers";
import {LOGIN_ACTION, LoginAction, LoginState, LoginStatus} from "../types";

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
})


