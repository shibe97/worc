import { favoritesCreate, favoritesDestroy } from '../utils/favorite';
import { retweetsCreate, retweetsDestroy } from '../utils/retweet';

const initialState = {
  gettingList     : false,
  list            : [],
  gettingStatuses : false,
  statuses        : []
};

export default function listsReducer (state = initialState, action) {
  switch (action.type) {
    case 'SYSTEM_ERROR':
      return {
        ...state,
        gettingList     : false,
        gettingStatuses : false
      };

    case 'REQUEST_GET_LIST':
      return {
        ...state,
        gettingList     : true
      };

    case 'SUCCESS_GET_LIST':
      return {
        ...state,
        gettingList : false,
        list : action.payload.data
      };

    case 'FAILURE_GET_LIST':
      return {
        ...state,
        gettingList : false
      };

    case 'REQUEST_GET_LISTS_STATUSES':
      return {
        ...state,
        gettingStatuses : true
      };

    case 'SUCCESS_GET_LISTS_STATUSES':
      return {
        ...state,
        gettingStatuses : false,
        statuses : action.payload.data
      };

    case 'FAILURE_GET_LISTS_STATUSES':
      return {
        ...state,
        gettingStatuses : false
      };

    case 'SUCCESS_POST_FAVORITES_CREATE':
    case 'FAILURE_POST_FAVORITES_DESTROY':
      return {
        ...state,
        statuses : favoritesCreate(state.statuses, action.payload.id)
      };

    case 'SUCCESS_POST_FAVORITES_DESTROY':
    case 'FAILURE_POST_FAVORITES_CREATE':
      return {
        ...state,
        statuses : favoritesDestroy(state.statuses, action.payload.id)
      };

    case 'SUCCESS_POST_RETWEET':
      return {
        ...state,
        statuses : retweetsCreate(state.statuses, action.payload.id)
      };

    case 'FAILURE_POST_RETWEET':
      return {
        ...state,
        statuses : retweetsDestroy(state.statuses, action.payload.id)
      };

    case 'SUCCESS_STREAM_SITE_FOLLOW':
      return {
        ...state,
        statuses : [
          action.payload.data,
          ...state.statuses
        ]
      };

    case 'RESET_TIMELINE':
      return {
        ...state,
        list : [],
        statuses : []
      };

    default:
      break;
  }
  return state;
};
