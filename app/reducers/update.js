import 'twitter-text';

const initialItems = {
  update: '',
  remainingCharacters: 140,
  postingUpdate: false
};

export default function updateReducer(items = initialItems, action) {
  switch (action.type) {
    case 'SYSTEM_ERROR':
      return Object.assign({}, items, {
        postingUpdate: false
      });
    case 'REQUEST_POST_UPDATE':
      return Object.assign({}, items, {
        postingUpdate: true
      });
    case 'SUCCESS_POST_UPDATE':
      return Object.assign({}, items, {
        postingUpdate: false,
        update: '',
        remainingCharacters: 140
      });
    case 'FAILURE_POST_UPDATE':
      return Object.assign({}, items, {
        postingUpdate: false
      });
    case 'INPUT_UPDATE':
      return Object.assign({}, items, {
        update: action.payload,
        remainingCharacters: 140 - twttr.txt.getTweetLength(action.payload)
      });
    default:
      break;
  }
  return items;
}
