import { createAction } from 'redux-actions';

export const REQUEST_STREAM_USER = 'REQUEST_STREAM_USER';
export const SUCCESS_STREAM_USER = 'SUCCESS_STREAM_USER';
export const FAILURE_STREAM_USER = 'FAILURE_STREAM_USER';

export const requestStreamUser = dispatch => ({
  type: REQUEST_STREAM_USER,
  dispatch
});
export const successStreamUser = createAction(SUCCESS_STREAM_USER);
export const failureStreamUser = createAction(FAILURE_STREAM_USER);
