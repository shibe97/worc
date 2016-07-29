const initialItems = {
  gettingTimeline: false,
  timeline: []
};

export default function timelineReducer(items = initialItems, action) {
  switch (action.type) {
    case 'SYSTEM_ERROR':
      return { ...items, gettingTimeline: false }

    case 'REQUEST_GET_MENTIONS_TIMELINE':
      return { ...items, gettingTimeline: true }

    case 'SUCCESS_GET_MENTIONS_TIMELINE':
      return {
        ...items,
        gettingTimeline: false,
        timeline: action.payload.data
      }

    case 'FAILURE_GET_MENTIONS_TIMELINE':
      return { ...items, gettingTimeline: false }

    case 'SUCCESS_POST_FAVORITES_CREATE':
      return items.timeline.map((tweet) => {
        if (tweet.id_str === action.payload.id) {
          tweet.favorite_count ++;
          tweet.favorited = true;
        }
        return tweet;
      });

    case 'SUCCESS_POST_FAVORITES_DESTROY':
      return items.timeline.map((tweet) => {
        if (tweet.id_str === action.payload.id) {
          tweet.favorite_count --;
          tweet.favorited = false;
        }
        return tweet;
      });

    case 'SUCCESS_POST_RETWEET':
      return items.timeline.map((tweet) => {
        if (tweet.id_str === action.payload.id) {
          tweet.retweet_count ++;
          tweet.retweeted = true;
        }
        return tweet;
      });

    default:
      break;
  }
  return items;
}
