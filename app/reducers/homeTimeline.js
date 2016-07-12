const initialItems = {
    gettingHomeTimeline : false,
    homeTimeline        : []
};

export default function homeTimelineReducer (items = initialItems, action) {
    let _items = Object.assign({}, items);
    switch (action.type) {
        case 'GETTING_HOME_TIMELINE':
            _items.gettingHomeTimeline = true;
            break;
        case 'GET_HOME_TIMELINE_SUCCESS':
            _items.gettingHomeTimeline = false;
            _items.homeTimeline = action.data;
            break;
        case 'SYSTEM_ERROR':
            _items.gettingHomeTimeline = false;
            break;
        default:
            break;
    }
    return _items;
};
