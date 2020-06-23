import fetchMock from "fetch-mock";
import createMockStore from "redux-mock-store";
import {setLoginStatus} from "../actions";
import thunk from "redux-thunk";
import {API, LoginStatus} from "../types";
import {thunkLogin} from "../thunks";

const mockStore = createMockStore([thunk])

describe('async actions', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    it('login action', () => {
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
