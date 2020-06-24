import {RootState} from "./store";
import {ThunkAction} from "redux-thunk";
import {Action} from 'redux'
import User from "./Model/User";

export const LOGIN_ACTION = 'LOGIN_ACTION'
export const SET_USERS_ACTION = 'SET_USERS_ACTION'
export const API = 'https://emphasoft-test-assignment.herokuapp.com'
export const USER_TABLE_FILTER_ACTION = "USER_TABLE_FILTER_ACTION"
export const USER_TABLE_SORT_TYPE_ACTION = "USER_TABLE_SORT_TYPE_ACTION"

export enum SortType {
    ASCENDING = "ASCENDING",
    DESCENDING = "DESCENDING"
}

export enum LoginStatus {
    NOT_LOGGED_IN = "NOT_LOGGED_IN",
    LOGIN_IN_PROGRESS = "LOGIN_IN_PROGRESS",
    LOGIN_HAS_ERRORED = "LOGIN_HAS_ERRORED",
    LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL",
}

export enum UsersFetchStatus {
    NOT_FETCHED = "NOT_FETCHED",
    FETCHING_IN_PROGRESS = "FETCHING_IN_PROGRESS",
    FETCHING_HAS_ERRORED = "FETCHING_HAS_ERRORED",
    FETCHED_SUCCESSFUL = "FETCHED_SUCCESSFUL"
}

export interface LoginState {
    loginStatus: LoginStatus,
    loginErrorMsg: string
}

export interface LoginAction extends LoginState {
    type: typeof LOGIN_ACTION
}

export interface UsersState {
    users: User[],
    fetchStatus: UsersFetchStatus,
    fetchErrorMsg: string
}

export interface UsersAction extends UsersState {
    type: typeof SET_USERS_ACTION
}

export interface UserTableSettingsState {
    usernameFilterWord: string,
    sortType: SortType
}

export interface UserTableFilterAction {
    type: typeof USER_TABLE_FILTER_ACTION,
    usernameFilterWord: string
}

export interface UserTableSortTypeAction {
    type: typeof USER_TABLE_SORT_TYPE_ACTION,
    sortType: SortType
}

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>
