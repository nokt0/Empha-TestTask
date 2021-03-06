import {checkToken, deleteCookie, getCookie, setCookie} from "./cookieHelpers";
import {setLoginStatus, setUsers} from "./actions";
import {API, AppThunk, LoginStatus, UsersFetchStatus} from "./types";

export const thunkLogin = (log: string, pass: string, remember: boolean = false): AppThunk => async dispatch => {
    await thunkLogout();
    dispatch(setLoginStatus(LoginStatus.LOGIN_IN_PROGRESS));
    const body = {username: log, password: pass};

    const api = API + "/api-token-auth/";
    return fetch(api, {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'accept': 'application/json'},
        body: JSON.stringify(body),
    })
        .then((response) => {
            if (!response.ok) {
                if (response.status === 400) {
                    throw new Error("400")
                } else {
                    throw new Error(response.statusText)
                }
            }
            return response;
        })
        .then((response) => response.json())
        .then((token) => {
            if (token?.token) {
                if (remember) {
                    setCookie("token", token.token, {'max-age': Date.now() + 2_592_000}) // 30 дней
                } else {
                    setCookie("token", token.token, {})
                }
                dispatch(setLoginStatus(LoginStatus.LOGIN_SUCCESSFUL))
            }else {
                throw Error("Doesnt have token")
            }
            return token
        })
        .catch((e: Error) => {
            if(e.message === "400"){
                return dispatch(setLoginStatus(LoginStatus.WRONG_CREDENTIAL,"Wrong Credentials"));
            }
            return dispatch(setLoginStatus(LoginStatus.LOGIN_HAS_ERRORED, e.message))
        })
}

export const thunkLogout = (): AppThunk => async dispatch => {
    dispatch(setLoginStatus(LoginStatus.NOT_LOGGED_IN))
    deleteCookie("token")
}

export const thunkFetchUsers = (): AppThunk => async dispatch => {

    dispatch(setUsers([], UsersFetchStatus.NOT_FETCHED))

    if (!checkToken() && process.env.NODE_ENV !== "test") {
        return dispatch(thunkLogout())
    }
    const token = getCookie("token");
    dispatch(setUsers([], UsersFetchStatus.FETCHING_IN_PROGRESS))

    const api = `${API}/api/v1/users/`;
    return await fetch(api, {
        headers: {'Authorization': `Token ${token}`}
    }).then((response) => {
        if (!response.ok) {
            dispatch(setUsers([], UsersFetchStatus.FETCHING_HAS_ERRORED, response.statusText))
            throw new Error(response.statusText);
        }
        return response;
    })
        .then((response) => response.json())
        .then((users) => {
            return dispatch(setUsers(users, UsersFetchStatus.FETCHED_SUCCESSFUL))
        })
        .catch((error) => {
            dispatch(setUsers([], UsersFetchStatus.FETCHING_HAS_ERRORED, error.message))
        })
}
