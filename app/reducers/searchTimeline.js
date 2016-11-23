import { favoritesCreate, favoritesDestroy } from '../utils/favorite';
import { retweetsCreate, retweetsDestroy } from '../utils/retweet';

const initialState = {
  gettingStatuses: false,
  query: '',
  statuses: []
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case 'SYSTEM_ERROR':
      return {
        ...state,
        gettingStatuses: false
      };

    case 'INPUT_QUERY':
      return {
        ...state,
        query: action.payload
      };

    case 'REQUEST_GET_SEARCH_TWEETS':
      return {
        ...state,
        gettingStatuses: true
      };

    case 'SUCCESS_GET_SEARCH_TWEETS':
      return {
        ...state,
        gettingStatuses: false,
        statuses: action.payload.data.statuses
      };

    case 'FAILURE_GET_SEARCH_TWEETS':
      return {
        ...state,
        gettingStatuses: false
      };

    case 'SUCCESS_POST_FAVORITES_CREATE':
    case 'FAILURE_POST_FAVORITES_DESTROY':
      return {
        ...state,
        statuses: favoritesCreate(state.statuses, action.payload.id)
      };

    case 'SUCCESS_POST_FAVORITES_DESTROY':
    case 'FAILURE_POST_FAVORITES_CREATE':
      return {
        ...state,
        statuses: favoritesDestroy(state.statuses, action.payload.id)
      };

    case 'SUCCESS_POST_RETWEET':
      return {
        ...state,
        statuses: retweetsCreate(state.statuses, action.payload.id)
      };

    case 'FAILURE_POST_RETWEET':
      return {
        ...state,
        statuses: retweetsDestroy(state.statuses, action.payload.id)
      };

    case 'SUCCESS_STREAM_SITE_TRACK':
      return {
        ...state,
        statuses: [
          action.payload.trackData,
          ...state.statuses
        ]
      };

    case 'RESET_TIMELINE':
      return {
        ...state,
        statuses: []
      };

    default:
      break;
  }
  return state;
}
