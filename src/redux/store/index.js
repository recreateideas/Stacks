/* eslint-disable no-underscore-dangle */
import {
    createStore,
    applyMiddleware,
    combineReducers,
    compose,
} from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import * as reducers from '../reducers';
import * as selectors from '../selectors';
import * as actions from '../actions';
import { useSelector } from '../customHooks';

const history = createBrowserHistory();

/** STORE */
const slices = combineReducers({
    appState: combineReducers({ ...reducers }),
    router: connectRouter(history),
});

const middlewares = [
    applyMiddleware(
        thunk,
        routerMiddleware(history),
    ),
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })
    : compose;

const store = createStore(
    slices,
    composeEnhancers(
        ...middlewares,
    ),
);

export default store;

export {
    useSelector,
    selectors,
    actions,
    history,
};
