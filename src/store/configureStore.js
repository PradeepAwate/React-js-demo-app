import {createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        //applyMiddleware(thunk, reduxImmutableStateInvariant(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
        composeEnhancers(
            applyMiddleware(thunk, reduxImmutableStateInvariant())
        )
    );
}
