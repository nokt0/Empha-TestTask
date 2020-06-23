import {RootState} from "./store";
import {ThunkAction} from "redux-thunk";
import {Action} from 'redux'
import User from "./Model/User";

export const LOGIN_ACTION = 'LOGIN_ACTION'
export const SET_USERS_ACTION = 'SET_USERS_ACTION'
export const API = 'https://emphasoft-test-assignment.herokuapp.com'

export enum LoginStatus {
    NOT_LOGGED_IN = "NOT_LOGGED_IN",
    LOGIN_IN_PROGRESS = "LOGIN_IN_PROGRESS",
    LOGIN_HAS_ERRORED = "LOGIN_HAS_ERRORED",
    LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL",
}

export interface LoginState {
    loginStatus: LoginStatus,
    loginErrorMsg: string
}

export interface UsersState {
    users: User[]
}

export interface LoginAction {
    type: typeof LOGIN_ACTION
    loginStatus: LoginStatus
    loginErrorMsg: string
}

export interface UsersAction {
    type: typeof SET_USERS_ACTION
    users: User[]
}

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>
