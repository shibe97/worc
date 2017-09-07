import 'twitter-text';

const initialState = {
  modal: false,
  tweet: {},
  reply: '',
  remainingCharacters: 140,
  postingReply: false
};

export default function replyReducer(state = initialState, action) {
  switch (action.type) {
    case 'OPEN_REPLY_MODAL':
      return {
        ...state,
        modal: true,
        tweet: action.payload
      };
    case 'CLOSE_REPLY_MODAL':
      return {
        ...state,
        modal: false
      };
    case 'SYSTEM_ERROR':
      return Object.assign({}, state, {
        postingReply: false
      });
    case 'REQUEST_POST_REPLY':
      return Object.assign({}, state, {
        postingReply: true
      });
    case 'SUCCESS_POST_REPLY':
      return Object.assign({}, state, {
        postingReply: false,
        reply: '',
        remainingCharacters: 140
      });
    case 'FAILURE_POST_REPLY':
      return Object.assign({}, state, {
        postingReply: false
      });
    case 'INPUT_REPLY':
      return Object.assign({}, state, {
        reply: action.payload,
        remainingCharacters: 140 - twttr.txt.getTweetLength(action.payload)
      });
    default:
      break;
  }
  return state;
}
