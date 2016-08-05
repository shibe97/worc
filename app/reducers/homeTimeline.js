const initialState = {
  gettingTimeline : false,
  timeline        : []
};

export default function homeTimelineReducer (state = initialState, action) {
  switch (action.type) {
    case 'SYSTEM_ERROR':
      return {
        ...state,
        gettingTimeline : false
      };

    case 'REQUEST_GET_HOME_TIMELINE':
      return {
        ...state,
        gettingTimeline : true
      };

    case 'SUCCESS_GET_HOME_TIMELINE':
      return {
        ...state,
        gettingTimeline : false,
        timeline : action.payload.data
      };

    case 'FAILURE_GET_HOME_TIMELINE':
      return {
        ...state,
        gettingTimeline : false
      };

    case 'SUCCESS_STREAM_USER':
      return {
        ...state,
        timeline : [
          action.payload.data,
          ...state.timeline
        ]
      };

    case 'SUCCESS_POST_FAVORITES_CREATE':
      return {
        ...state,
        timeline : state.timeline.map((tweet) => {
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
        timeline : state.timeline.map((tweet) => {
          if (tweet.id_str === action.payload.id) {
            return Object.assign({}, tweet, {
              favorite_count : tweet.favorite_count - 1,
              favorited : false
            });
          }
          return tweet;
        })
      };

    case 'SUCCESS_POST_RETWEET':
      return {
        ...state,
        timeline : state.timeline.map((tweet) => {
          if (tweet.id_str === action.payload.id) {
            return Object.assign({}, tweet, {
              retweet_count : tweet.retweet_count + 1,
              retweeted : true
            });
          }
          return tweet;
        })
      };

    default:
      break;
  }
  return state;
};
