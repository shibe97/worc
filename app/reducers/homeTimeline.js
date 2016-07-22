const initialItems = {
    gettingTimeline : false,
    timeline        : []
};

export default function homeTimelineReducer (items = initialItems, action) {
    let _items = Object.assign({}, items);
    switch (action.type) {
        case 'SYSTEM_ERROR':
            _items.gettingTimeline = false;
            break;
        case 'REQUEST_GET_HOME_TIMELINE':
            _items.gettingTimeline = true;
            break;
        case 'SUCCESS_GET_HOME_TIMELINE':
            _items.gettingTimeline = false;
            _items.timeline = action.payload.data;
            break;
        case 'FAILURE_GET_HOME_TIMELINE':
            _items.gettingTimeline = false;
            break;

        case 'SUCCESS_STREAM_USER':
            _items.timeline.unshift(action.payload.data);
            break;

        case 'SUCCESS_POST_FAVORITES_CREATE':
            _items.timeline.forEach((tweet) => {
                if (tweet.id_str === action.payload.id) {
                    tweet.favorite_count ++;
                    tweet.favorited = true;
                }
            });
            break;
        case 'SUCCESS_POST_FAVORITES_DESTROY':
            _items.timeline.forEach((tweet) => {
                if (tweet.id_str === action.payload.id) {
                    tweet.favorite_count --;
                    tweet.favorited = false;
                }
            });
            break;

        case 'SUCCESS_POST_RETWEET':
            _items.timeline.forEach((tweet) => {
                if (tweet.id_str === action.payload.id) {
                    tweet.retweet_count ++;
                    tweet.retweeted = true;
                }
            });
            break;
        default:
            break;
    }
    return _items;
};
