import fetchMock from "fetch-mock";
import createMockStore from "redux-mock-store";
import {setLoginStatus, setUsers} from "../actions";
import thunk from "redux-thunk";
import {API, LoginStatus, SET_USERS_ACTION} from "../types";
import {thunkLogin} from "../thunks";
import User from "../Model/User";

const mockStore = createMockStore([thunk])

describe('sync actions', () => {
    it('SET_USERS_ACTION', ()=>{
        const users: User[] = [{
            id:1,
            username:"sd",
            first_name:"fname",
            last_name:"lname",
            password:"2231ga",
            is_active:true,
            last_login:"12-01-2020",
            is_superuser:false}];
        const action = {
            type: SET_USERS_ACTION,
            users: users
        }
        expect(setUsers(users)).toEqual(action)
    })
})

