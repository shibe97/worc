import { createAction } from 'redux-actions';

export const REQUEST_POST_REPLY = 'REQUEST_POST_REPLY';
export const SUCCESS_POST_REPLY = 'SUCCESS_POST_REPLY';
export const FAILURE_POST_REPLY = 'FAILURE_POST_REPLY';
export const requestPostReply = createAction(REQUEST_POST_REPLY);
export const successPostReply = createAction(SUCCESS_POST_REPLY);
export const failurePostReply = createAction(FAILURE_POST_REPLY);

export const CLOSE_REPLY_MODAL = 'CLOSE_REPLY_MODAL';
export const closeReplyModal = createAction(CLOSE_REPLY_MODAL);

export const OPEN_REPLY_MODAL = 'OPEN_REPLY_MODAL';
export const openReplyModal = createAction(OPEN_REPLY_MODAL);

export const INPUT_REPLY = 'INPUT_REPLY';
export const inputReply = createAction(INPUT_REPLY);
