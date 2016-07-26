const initialItems = {
    gettingList     : false,
    list            : [],
    gettingStatuses : false,
    statuses        : []
};

export default function listsReducer (items = initialItems, action) {
    let _items = Object.assign({}, items);
    switch (action.type) {
        case 'SYSTEM_ERROR':
            _items.gettingList = false;
            _items.gettingStatuses = false;
            break;
        case 'REQUEST_GET_LIST':
            _items.gettingList = true;
            break;
        case 'SUCCESS_GET_LIST':
            _items.gettingList = false;
            _items.list = action.payload.data;
            break;
        case 'FAILURE_GET_LIST':
            _items.gettingList = false;
            break;
        case 'REQUEST_GET_LISTS_STATUSES':
            _items.gettingStatuses = true;
            break;
        case 'SUCCESS_GET_LISTS_STATUSES':
            _items.gettingStatuses = false;
            _items.statuses = action.payload.data;
            break;
        case 'FAILURE_GET_LISTS_STATUSES':
            _items.gettingStatuses = false;
            break;
        default:
            break;
    }
    return _items;
};
