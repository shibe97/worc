import React from 'react';
import { render } from 'react-dom';
import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// Routing
import Routes from './routes';

// Reducer
import homeTimelineReducer from './reducers/homeTimeline';
import mentionsTimelineReducer from './reducers/mentionsTimeline';

// ミドルウェア
const middleware = [ thunk ];

// Store作成
let reducer = combineReducers({
    homeTimelineReducer,
    mentionsTimelineReducer
});

const finalCreateStore = compose(
    applyMiddleware(...middleware)
)(createStore);
const store = finalCreateStore(reducer);

render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('app')
);
