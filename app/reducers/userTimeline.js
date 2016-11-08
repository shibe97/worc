import { favoritesCreate, favoritesDestroy } from '../utils/favorite';
import { retweetsCreate, retweetsDestroy } from '../utils/retweet';

const initialState = {
  gettingTimeline : false,
  timeline        : []
};

export default function userTimelineReducer (state = initialState, action) {
  switch (action.type) {
    case 'SYSTEM_ERROR':
      return {
        ...state,
        gettingTimeline : false
      };

    case 'REQUEST_GET_USER_TIMELINE':
      return {
        ...state,
        gettingTimeline : true
      };

    case 'SUCCESS_GET_USER_TIMELINE':
      return {
        ...state,
        gettingTimeline : false,
        timeline : action.payload.data
      };

    case 'FAILURE_GET_USER_TIMELINE':
      return {
        ...state,
        gettingTimeline : false
      };

    case 'SUCCESS_POST_FAVORITES_CREATE':
    case 'FAILURE_POST_FAVORITES_DESTROY':
      return {
        ...state,
        timeline : favoritesCreate(state.timeline, action.payload.id)
      };

    case 'SUCCESS_POST_FAVORITES_DESTROY':
    case 'FAILURE_POST_FAVORITES_CREATE':
      return {
        ...state,
        timeline : favoritesDestroy(state.timeline, action.payload.id)
      };

    case 'SUCCESS_POST_RETWEET':
      return {
        ...state,
        timeline : retweetsCreate(state.timeline, action.payload.id)
      };

    case 'FAILURE_POST_RETWEET':
      return {
        ...state,
        timeline : retweetsDestroy(state.timeline, action.payload.id)
      };

    case 'RESET_TIMELINE':
      return {
        ...state,
        timeline : []
      };

    default:
      break;
  }
  return state;
};
