import { createAction } from 'redux-actions';

export const REQUEST_STREAM_SITE_FOLLOW = 'REQUEST_STREAM_SITE_FOLLOW';
export const SUCCESS_STREAM_SITE_FOLLOW = 'SUCCESS_STREAM_SITE_FOLLOW';
export const FAILURE_STREAM_SITE_FOLLOW = 'FAILURE_STREAM_SITE_FOLLOW';

export const requestStreamSiteFollow = (dispatch, listId) => {
    return {
        type : REQUEST_STREAM_SITE_FOLLOW,
        dispatch,
        listId
    }
};
export const successStreamSiteFollow = createAction(SUCCESS_STREAM_SITE_FOLLOW);
export const failureStreamSiteFollow = createAction(FAILURE_STREAM_SITE_FOLLOW);

export const REQUEST_STREAM_SITE_TRACK = 'REQUEST_STREAM_SITE_TRACK';
export const SUCCESS_STREAM_SITE_TRACK = 'SUCCESS_STREAM_SITE_TRACK';
export const FAILURE_STREAM_SITE_TRACK = 'FAILURE_STREAM_SITE_TRACK';

export const requestStreamSiteTrack = (dispatch, keyword) => {
    return {
        type : REQUEST_STREAM_SITE_TRACK,
        dispatch,
        keyword
    }
};
export const successStreamSiteTrack = createAction(SUCCESS_STREAM_SITE_TRACK);
export const failureStreamSiteTrack = createAction(FAILURE_STREAM_SITE_TRACK);
