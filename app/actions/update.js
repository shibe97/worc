import { createAction } from 'redux-actions';

export const REQUEST_POST_UPDATE = 'REQUEST_POST_UPDATE';
export const SUCCESS_POST_UPDATE = 'SUCCESS_POST_UPDATE';
export const FAILURE_POST_UPDATE = 'FAILURE_POST_UPDATE';
export const requestPostUpdate = createAction(REQUEST_POST_UPDATE);
export const successPostUpdate = createAction(SUCCESS_POST_UPDATE);
export const failurePostUpdate = createAction(FAILURE_POST_UPDATE);

export const INPUT_UPDATE = 'INPUT_UPDATE';
export const inputUpdate = createAction(INPUT_UPDATE);
