import fetchMock from "fetch-mock";
import {API, LoginStatus, UsersAction, UsersFetchStatus} from "../types";
import {setLoginStatus, setUsers} from "../actions";
import {thunkFetchUsers, thunkLogin} from "../thunks";
import createMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {AnyAction} from "redux"
import {testUsers} from "./actions.test";


const mockStore = createMockStore([thunk])

describe('async actions', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    it('Login action', () => {
        fetchMock.postOnce(`${API}/api-token-auth/`, {
            headers: {'content-type': 'application/json'},
            body: {
                "token": "781bd9f1de084f4daa7ba2aa8a71a2eab855354e"
            }
        })
        const expectedActions = [setLoginStatus(LoginStatus.LOGIN_IN_PROGRESS), setLoginStatus(LoginStatus.LOGIN_SUCCESSFUL)]
        const store = mockStore({})


        // @ts-ignore
        store.dispatch(thunkLogin("test", "ssss"))
            .then(() => {
                const actions = store.getActions()
                expect(store.getActions()).toEqual(expectedActions)
            })
    })

    it('Fetch Users action',() => {
        fetchMock.getOnce(`${API}/api/v1/users/`,{
            headers: {'content-type': 'application/json'},
            body: {
                'users' : testUsers
            }
        })

        const store = mockStore({})
        const expectedActions : UsersAction[] = [setUsers([],UsersFetchStatus.NOT_FETCHED),setUsers(testUsers,UsersFetchStatus.FETCHED_SUCCESSFUL)]

        store.dispatch(thunkFetchUsers() as unknown as AnyAction).then(() => {
            const actions = store.getActions()
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})
