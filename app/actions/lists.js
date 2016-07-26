import { createAction } from 'redux-actions';

export const REQUEST_GET_LIST = 'REQUEST_GET_LIST';
export const SUCCESS_GET_LIST = 'SUCCESS_GET_LIST';
export const FAILURE_GET_LIST = 'FAILURE_GET_LIST';
export const requestGetList = createAction(REQUEST_GET_LIST);
export const successGetList = createAction(SUCCESS_GET_LIST);
export const failureGetList = createAction(FAILURE_GET_LIST);

export const REQUEST_GET_LISTS_STATUSES = 'REQUEST_GET_LISTS_STATUSES';
export const SUCCESS_GET_LISTS_STATUSES = 'SUCCESS_GET_LISTS_STATUSES';
export const FAILURE_GET_LISTS_STATUSES = 'FAILURE_GET_LISTS_STATUSES';
export const requestGetListsStatuses = createAction(REQUEST_GET_LISTS_STATUSES);
export const successGetListsStatuses = createAction(SUCCESS_GET_LISTS_STATUSES);
export const failureGetListsStatuses = createAction(FAILURE_GET_LISTS_STATUSES);
