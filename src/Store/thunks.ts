import {deleteCookie, setCookie} from "./cookieHelpers";
import {setLoginStatus} from "./actions";
import {API, AppThunk, LoginStatus} from "./types";

export const thunkLogin = (log: string, pass: string): AppThunk => async dispatch => {
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
                dispatch(setLoginStatus(LoginStatus.LOGIN_HAS_ERRORED, response.statusText))
                throw new Error(response.statusText);
            }
            return response;
        })
        .then((response) => response.json())
        .then((token) => {
            setCookie("token",token.token,{'max-age': Date.now() + 2_592_000}) //30 дней
            dispatch(setLoginStatus(LoginStatus.LOGIN_SUCCESSFUL))
            return token
        })
        .catch((response) => {
            return dispatch(setLoginStatus(LoginStatus.LOGIN_HAS_ERRORED, response.statusText))
        })
}

export const thunkLogout = (): AppThunk => async dispatch => {
    dispatch(setLoginStatus(LoginStatus.NOT_LOGGED_IN))
    deleteCookie("token")
}
