import { createAction } from 'redux-actions';

export const REQUEST_GET_USERS_SHOW = 'REQUEST_GET_USERS_SHOW';
export const SUCCESS_GET_USERS_SHOW = 'SUCCESS_GET_USERS_SHOW';
export const FAILURE_GET_USERS_SHOW = 'FAILURE_GET_USERS_SHOW';
export const requestGetUsersShow = createAction(REQUEST_GET_USERS_SHOW);
export const successGetUsersShow = createAction(SUCCESS_GET_USERS_SHOW);
export const failureGetUsersShow = createAction(FAILURE_GET_USERS_SHOW);
