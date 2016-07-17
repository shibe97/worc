const initialItems = {
    gettingMentionsTimeline : false,
    mentionsTimeline        : []
};

export default function mentionsTimelineReducer (items = initialItems, action) {
    let _items = Object.assign({}, items);
    switch (action.type) {
        case 'SYSTEM_ERROR':
            _items.gettingMentionsTimeline = false;
            break;
        case 'REQUEST_GET_MENTIONS_TIMELINE':
            _items.gettingMentionsTimeline = true;
            break;
        case 'SUCCESS_GET_MENTIONS_TIMELINE':
            _items.gettingMentionsTimeline = false;
            _items.mentionsTimeline = action.payload.data;
            break;
        case 'FAILURE_GET_MENTIONS_TIMELINE':
            _items.gettingMentionsTimeline = false;
            break;

        case 'SUCCESS_POST_FAVORITES_CREATE':
            _items.mentionsTimeline.forEach((tweet) => {
                if (tweet.id_str === action.payload.id) {
                    tweet.favorite_count ++;
                    tweet.favorited = true;
                }
            });
            break;
        default:
            break;
    }
    return _items;
};
