import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
// import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

// Routing
import Routes from './routes';

// Reducer
import homeTimelineReducer from './reducers/homeTimeline';
import userTimelineReducer from './reducers/userTimeline';
import mentionsTimelineReducer from './reducers/mentionsTimeline';
import searchReducer from './reducers/searchTimeline';
import userReducer from './reducers/user';
import retweetReducer from './reducers/retweet';
import updateReducer from './reducers/update';
import listsReducer from './reducers/lists';

// Middleware
const sagaMiddleware = createSagaMiddleware();
// const logger = createLogger();
// const middleware = [ sagaMiddleware, logger ];
const middleware = [sagaMiddleware];

// Store
const reducer = combineReducers({
  homeTimelineReducer,
  userTimelineReducer,
  mentionsTimelineReducer,
  searchReducer,
  userReducer,
  retweetReducer,
  updateReducer,
  listsReducer
});

const finalCreateStore = compose(
  applyMiddleware(...middleware)
)(createStore);
const store = finalCreateStore(reducer);
sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app')
);
