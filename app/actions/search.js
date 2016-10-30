import { createAction } from 'redux-actions';

export const REQUEST_GET_SEARCH_TWEETS = 'REQUEST_GET_SEARCH_TWEETS';
export const SUCCESS_GET_SEARCH_TWEETS = 'SUCCESS_GET_SEARCH_TWEETS';
export const FAILURE_GET_SEARCH_TWEETS = 'FAILURE_GET_SEARCH_TWEETS';
export const requestGetSearchTweets = createAction(REQUEST_GET_SEARCH_TWEETS);
export const successGetSearchTweets = createAction(SUCCESS_GET_SEARCH_TWEETS);
export const failureGetSearchTweets = createAction(FAILURE_GET_SEARCH_TWEETS);

export const INPUT_QUERY = 'INPUT_QUERY';
export const inputQuery = createAction(INPUT_QUERY);
