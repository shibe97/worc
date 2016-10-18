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
      return {
        ...state,
        statuses : state.statuses.map((tweet) => {
          if (tweet.id_str === action.payload.id) {
            return Object.assign({}, tweet, {
              favorite_count : tweet.favorite_count + 1,
              favorited : true
            });
          }
          return tweet;
        })
      };

    case 'SUCCESS_POST_FAVORITES_DESTROY':
      return {
        ...state,
        statuses : state.statuses.map((tweet) => {
          if (tweet.id_str === action.payload.id) {
            return Object.assign({}, tweet, {
              favorite_count : tweet.favorite_count - 1,
              favorited : false
            });
          }
          return tweet;
        })
      };

    case 'SUCCESS_STREAM_SITE':
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
