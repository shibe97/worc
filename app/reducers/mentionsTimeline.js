const initialItems = {
    gettingMentionsTimeline : false,
    mentionsTimeline        : []
};

export default function mentionsTimelineReducer (items = initialItems, action) {
    let _items = Object.assign({}, items);
    switch (action.type) {
        case 'GETTING_MENTIONS_TIMELINE':
            _items.gettingMentionsTimeline = true;
            break;
        case 'GET_MENTIONS_TIMELINE_SUCCESS':
            _items.gettingMentionsTimeline = false;
            _items.mentionsTimeline = action.data;
            break;
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
        default:
            break;
    }
    return _items;
};
