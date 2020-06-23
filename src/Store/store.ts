import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(initialState = stateData) {
    return createStore(
        reducers,
        (localStorage['redux-store']) ?
            JSON.parse(localStorage['redux-store']) :
            initialState,
        composeWithDevTools(applyMiddleware(...middleware),),
    );
}
