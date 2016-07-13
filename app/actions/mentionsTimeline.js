import { createAction } from 'redux-actions';

export const REQUEST_GET_MENTIONS_TIMELINE = 'REQUEST_GET_MENTIONS_TIMELINE';
export const SUCCESS_GET_MENTIONS_TIMELINE = 'SUCCESS_GET_MENTIONS_TIMELINE';
export const FAILURE_GET_MENTIONS_TIMELINE = 'FAILURE_GET_MENTIONS_TIMELINE';
export const requestGetMentionsTimeline = createAction(REQUEST_GET_MENTIONS_TIMELINE);
export const successGetMentionsTimeline = createAction(SUCCESS_GET_MENTIONS_TIMELINE);
export const failureGetMentionsTimeline = createAction(FAILURE_GET_MENTIONS_TIMELINE);
