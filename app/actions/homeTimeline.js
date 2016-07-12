import { twGet } from '../utils/twitterClient';

export function getHomeTimeline() {
    return dispatch => {
        dispatch(twGet('statuses/home_timeline', getHomeTimelineSuccess));
    };
}

export function getHomeTimelineSuccess(data) {
    return {
        type : 'GET_HOME_TIMELINE_SUCCESS',
        data : data
    };
}
