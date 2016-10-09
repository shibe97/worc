import { createAction } from 'redux-actions';

export const REQUEST_GET_HOME_TIMELINE = 'REQUEST_GET_HOME_TIMELINE';
export const SUCCESS_GET_HOME_TIMELINE = 'SUCCESS_GET_HOME_TIMELINE';
export const FAILURE_GET_HOME_TIMELINE = 'FAILURE_GET_HOME_TIMELINE';
export const requestGetHomeTimeline = createAction(REQUEST_GET_HOME_TIMELINE);
export const successGetHomeTimeline = createAction(SUCCESS_GET_HOME_TIMELINE);
export const failureGetHomeTimeline = createAction(FAILURE_GET_HOME_TIMELINE);

export const REQUEST_GET_USER_TIMELINE = 'REQUEST_GET_USER_TIMELINE';
export const SUCCESS_GET_USER_TIMELINE = 'SUCCESS_GET_USER_TIMELINE';
export const FAILURE_GET_USER_TIMELINE = 'FAILURE_GET_USER_TIMELINE';
export const requestGetUserTimeline = createAction(REQUEST_GET_USER_TIMELINE);
export const successGetUserTimeline = createAction(SUCCESS_GET_USER_TIMELINE);
export const failureGetUserTimeline = createAction(FAILURE_GET_USER_TIMELINE);

export const REQUEST_GET_MENTIONS_TIMELINE = 'REQUEST_GET_MENTIONS_TIMELINE';
export const SUCCESS_GET_MENTIONS_TIMELINE = 'SUCCESS_GET_MENTIONS_TIMELINE';
export const FAILURE_GET_MENTIONS_TIMELINE = 'FAILURE_GET_MENTIONS_TIMELINE';
export const requestGetMentionsTimeline = createAction(REQUEST_GET_MENTIONS_TIMELINE);
export const successGetMentionsTimeline = createAction(SUCCESS_GET_MENTIONS_TIMELINE);
export const failureGetMentionsTimeline = createAction(FAILURE_GET_MENTIONS_TIMELINE);

export const RESET_TIMELINE = 'RESET_TIMELINE';
export const resetTimeline = createAction(RESET_TIMELINE);
