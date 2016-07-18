import { createAction } from 'redux-actions';

export const REQUEST_POST_RETWEET = 'REQUEST_POST_RETWEET';
export const SUCCESS_POST_RETWEET = 'SUCCESS_POST_RETWEET';
export const FAILURE_POST_RETWEET = 'FAILURE_POST_RETWEET';
export const requestPostRetweet = createAction(REQUEST_POST_RETWEET);
export const successPostRetweet = createAction(SUCCESS_POST_RETWEET);
export const failurePostRetweet = createAction(FAILURE_POST_RETWEET);
