import fetchMock from "fetch-mock";
import {API, LoginStatus} from "../types";
import {setLoginStatus} from "../actions";
import {thunkLogin} from "../thunks";
import createMockStore from "redux-mock-store";
import thunk from "redux-thunk";


const mockStore = createMockStore([thunk])

describe('async actions', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    it('Login action', () => {
        fetchMock.post(`${API}/api-token-auth/`, {
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
})
