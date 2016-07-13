import { createAction } from 'redux-actions';

export const REQUEST_GET_HOME_TIMELINE = 'REQUEST_GET_HOME_TIMELINE';
export const SUCCESS_GET_HOME_TIMELINE = 'SUCCESS_GET_HOME_TIMELINE';
export const FAILURE_GET_HOME_TIMELINE = 'FAILURE_GET_HOME_TIMELINE';
export const requestGetHomeTimeline = createAction(REQUEST_GET_HOME_TIMELINE);
export const successGetHomeTimeline = createAction(SUCCESS_GET_HOME_TIMELINE);
export const failureGetHomeTimeline = createAction(FAILURE_GET_HOME_TIMELINE);
