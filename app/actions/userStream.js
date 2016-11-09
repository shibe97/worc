import { createAction } from 'redux-actions';

export const REQUEST_STREAM_USER = 'REQUEST_STREAM_USER';
export const SUCCESS_STREAM_USER = 'SUCCESS_STREAM_USER';
export const FAILURE_STREAM_USER = 'FAILURE_STREAM_USER';

export const requestStreamUser = (dispatch) => {
    return {
        type : REQUEST_STREAM_USER,
        dispatch
    }
};
export const successStreamUser = createAction(SUCCESS_STREAM_USER);
export const failureStreamUser = createAction(FAILURE_STREAM_USER);

export const REQUEST_STREAM_LISTS = 'REQUEST_STREAM_LISTS';
export const SUCCESS_STREAM_LISTS = 'SUCCESS_STREAM_LISTS';
export const FAILURE_STREAM_LISTS = 'FAILURE_STREAM_LISTS';

export const requestStreamLists = (dispatch, listId) => {
    return {
        type : REQUEST_STREAM_LISTS,
        dispatch,
        listId
    }
};
export const successStreamLists = createAction(SUCCESS_STREAM_LISTS);
export const failureStreamLists = createAction(FAILURE_STREAM_LISTS);
