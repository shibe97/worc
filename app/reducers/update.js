const initialItems = {
    update : '',
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
        case 'REQUEST_POST_UPDATE':
            _items.postingUpdate = true;
            break;
        case 'SUCCESS_POST_UPDATE':
            _items.postingUpdate = false;
            _items.update = '';
            break;
        case 'FAILURE_POST_UPDATE':
            _items.postingUpdate = false;
            break;
        case 'INPUT_UPDATE':
            _items.update = action.payload;
            break;
        default:
            break;
    }
    return _items;
};
