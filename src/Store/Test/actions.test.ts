import createMockStore from "redux-mock-store";
import {changeUserTableFilter, changeUserTableSortType, setUsers} from "../actions";
import thunk from "redux-thunk";
import {
    SET_USERS_ACTION,
    SortType,
    USER_TABLE_FILTER_ACTION,
    USER_TABLE_SORT_TYPE_ACTION,
    UsersFetchStatus
} from "../types";
import User from "../Model/User";

const mockStore = createMockStore([thunk])
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

describe('sync actions', () => {
    it('SET_USERS_ACTION', () => {

        const action = {
            type: SET_USERS_ACTION,
            users: testUsers,
            fetchErrorMsg: "",
            fetchStatus: UsersFetchStatus.FETCHED_SUCCESSFUL
        }
        expect(setUsers(testUsers, UsersFetchStatus.FETCHED_SUCCESSFUL)).toEqual(action)
    })

    it('SET_LOGIN_STATUS', () => {

    })

    it('USER_TABLE_FILTER_ACTION', () => {
        const action = {
            type: USER_TABLE_FILTER_ACTION,
            usernameFilterWord: "fad"
        }

        expect(changeUserTableFilter(action.usernameFilterWord)).toEqual(action)
    })

    it('USER_TABLE_FILTER_ACTION', () => {
        const action = {
            type: USER_TABLE_SORT_TYPE_ACTION,
            sortType: SortType.ASCENDING
        }

        expect(changeUserTableSortType(action.sortType)).toEqual(action)
    })
})


