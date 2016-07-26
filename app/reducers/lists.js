const initialItems = {
    gettingList : false,
    list        : []
};

export default function listsReducer (items = initialItems, action) {
    let _items = Object.assign({}, items);
    switch (action.type) {
        case 'SYSTEM_ERROR':
            _items.gettingList = false;
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
        default:
            break;
    }
    return _items;
};
