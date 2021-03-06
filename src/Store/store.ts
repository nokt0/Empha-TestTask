import {composeWithDevTools} from 'redux-devtools-extension';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {loginReducer, usersReducer, userTableSettingsReducer} from "./reducers";
import thunk from 'redux-thunk';
import {LoginState, UsersState, UserTableSettingsState} from "./types";

// tslint:disable:no-console

export interface RootState {
    login: LoginState,
    users: UsersState
    userTable: UserTableSettingsState
}

const saver = (store: { getState: () => any; }) =>
    (next: (arg0: any) => any) =>
        (action: any) => {
            const result = next(action);
            localStorage['redux-store'] = JSON.stringify(store.getState());
            return result;
        };

const logger = (store: { getState: () => any; }) =>
    (next: (arg0: any) => any) =>
        (action: { type: any; }) => {
            console.group(action.type);
            console.info('dispatching', action);
            const result = next(action);
            console.log('next state', store.getState());
            console.groupEnd();
            return result;
        };

const reducers = combineReducers({
    login: loginReducer,
    users: usersReducer,
    userTable: userTableSettingsReducer
});

const middleware = [saver, logger, thunk];

export default function configureStore(initialState = {}) {
    return createStore(
        reducers,
        (localStorage['redux-store']) ?
            JSON.parse(localStorage['redux-store']) :
            initialState,
        composeWithDevTools(applyMiddleware(...middleware),),
    );
}
