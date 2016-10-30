const initialState = {
  gettingStatuses : false,
  query           : '',
  statuses        : []
};

export default function searchReducer (state = initialState, action) {
  switch (action.type) {
    case 'SYSTEM_ERROR':
      return {
        ...state,
        gettingStatuses : false
      };

    case 'INPUT_QUERY':
      return {
        ...state,
        query : action.payload
      };

    case 'REQUEST_GET_SEARCH_TWEETS':
      return {
        ...state,
        gettingStatuses : true
      };

    case 'SUCCESS_GET_SEARCH_TWEETS':
      return {
        ...state,
        gettingStatuses : false,
        statuses : action.payload.data.statuses
      };

    case 'FAILURE_GET_SEARCH_TWEETS':
      return {
        ...state,
        gettingStatuses : false
      };

    case 'SUCCESS_POST_FAVORITES_CREATE':
      return {
        ...state,
        statuses : state.statuses.map((tweet) => {
          if (tweet.retweeted_status && tweet.retweeted_status.id_str === action.payload.id) {
            return Object.assign({}, tweet, {
              retweeted_status : {
                ...tweet.retweeted_status,
                favorite_count : tweet.retweeted_status.favorite_count + 1,
                favorited : true
              }
            });
          } else if (tweet.id_str === action.payload.id) {
            return Object.assign({}, tweet, {
              favorite_count : tweet.favorite_count + 1,
              favorited : true
            });
          }
          return tweet;
        })
      };

    case 'FAILURE_POST_FAVORITES_CREATE':
      return {
        ...state,
        statuses : state.statuses.map((tweet) => {
          if (tweet.retweeted_status && tweet.retweeted_status.id_str === action.payload.id) {
            return Object.assign({}, tweet, {
              retweeted_status : {
                ...tweet.retweeted_status,
                favorite_count : tweet.retweeted_status.favorite_count - 1,
                favorited : false
              }
            });
          } else if (tweet.id_str === action.payload.id) {
            return Object.assign({}, tweet, {
              favorite_count : tweet.favorite_count - 1,
              favorited : false
            });
          }
          return tweet;
        })
      };

    case 'SUCCESS_POST_FAVORITES_DESTROY':
      return {
        ...state,
        statuses : state.statuses.map((tweet) => {
          if (tweet.retweeted_status && tweet.retweeted_status.id_str === action.payload.id) {
            return Object.assign({}, tweet, {
              retweeted_status : {
                ...tweet.retweeted_status,
                favorite_count : tweet.retweeted_status.favorite_count - 1,
                favorited : false
              }
            });
          } else if (tweet.id_str === action.payload.id) {
            return Object.assign({}, tweet, {
              favorite_count : tweet.favorite_count - 1,
              favorited : false
            });
          }
          return tweet;
        })
      };

    case 'FAILURE_POST_FAVORITES_DESTROY':
      return {
        ...state,
        statuses : state.statuses.map((tweet) => {
          if (tweet.retweeted_status && tweet.retweeted_status.id_str === action.payload.id) {
            return Object.assign({}, tweet, {
              retweeted_status : {
                ...tweet.retweeted_status,
                favorite_count : tweet.retweeted_status.favorite_count + 1,
                favorited : true
              }
            });
          } else if (tweet.id_str === action.payload.id) {
            return Object.assign({}, tweet, {
              favorite_count : tweet.favorite_count - 1,
              favorited : true
            });
          }
          return tweet;
        })
      };

    case 'SUCCESS_POST_RETWEET':
      return {
        ...state,
        statuses : state.statuses.map((tweet) => {
          if (tweet.retweeted_status && tweet.retweeted_status.id_str === action.payload.id) {
            return Object.assign({}, tweet, {
              retweeted_status : {
                ...tweet.retweeted_status,
                retweet_count : tweet.retweeted_status.retweet_count + 1,
                retweeted : true
              }
            });
          } else if (tweet.id_str === action.payload.id) {
            return Object.assign({}, tweet, {
              retweet_count : tweet.retweet_count + 1,
              retweeted : true
            });
          }
          return tweet;
        })
      };

    case 'FAILURE_POST_RETWEET':
      return {
        ...state,
        statuses : state.statuses.map((tweet) => {
          if (tweet.retweeted_status && tweet.retweeted_status.id_str === action.payload.id) {
            return Object.assign({}, tweet, {
              retweeted_status : {
                ...tweet.retweeted_status,
                retweet_count : tweet.retweeted_status.retweet_count - 1,
                retweeted : false
              }
            });
          } else if (tweet.id_str === action.payload.id) {
            return Object.assign({}, tweet, {
              retweet_count : tweet.retweet_count - 1,
              retweeted : false
            });
          }
          return tweet;
        })
      };

    case 'SUCCESS_STREAM_SITE_TRACK':
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
        statuses : []
      };

    default:
      break;
  }
  return state;
};
