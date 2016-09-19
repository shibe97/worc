import { createAction } from 'redux-actions';

export const REQUEST_STREAM_SITE = 'REQUEST_STREAM_SITE';
export const SUCCESS_STREAM_SITE = 'SUCCESS_STREAM_SITE';
export const FAILURE_STREAM_SITE = 'FAILURE_STREAM_SITE';

export const requestStreamSite = (dispatch, listId) => {
    return {
        type : REQUEST_STREAM_SITE,
        dispatch,
        listId
    }
};
export const successStreamSite = createAction(SUCCESS_STREAM_SITE);
export const failureStreamSite = createAction(FAILURE_STREAM_SITE);
