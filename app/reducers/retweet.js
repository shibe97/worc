const initialState = {
  modal   : false,
  tweetId : ''
};

export default function retweetReducer (state = initialState, action) {
  switch (action.type) {
    case 'OPEN_RETWEET_MODAL':
      return {
        ...state,
        modal   : true,
        tweetId : action.payload
      };

    case 'CLOSE_RETWEET_MODAL':
      return {
        ...state,
        modal : false
      };

    default:
      break;
  }
  return state;
};
