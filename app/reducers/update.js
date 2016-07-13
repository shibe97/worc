const initialItems = {
    postingUpdate : false
};

export default function updateReducer (items = initialItems, action) {
    let _items = Object.assign({}, items);
    switch (action.type) {
        case 'POSTING_UPDATE':
            _items.postingUpdate = true;
            break;
        case 'POST_UPDATE_SUCCESS':
            _items.postingUpdate = false;
            break;
        case 'SYSTEM_ERROR':
            _items.postingUpdate = false;
            break;
        default:
            break;
    }
    return _items;
};
