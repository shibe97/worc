import twitterText from 'twitter-text';

const initialItems = {
  update              : '',
  remainingCharacters : 140,
  postingUpdate       : false
};

export default function updateReducer (items = initialItems, action) {
  let _items = Object.assign({}, items);
  switch (action.type) {
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
      _items.remainingCharacters = 140 - twttr.txt.getTweetLength(action.payload);
      break;
    default:
      break;
  }
  return _items;
};
