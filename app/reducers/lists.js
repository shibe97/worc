const initialState = {
  gettingList     : false,
  list            : [],
  gettingStatuses : false,
  statuses        : []
};

export default function listsReducer (state = initialState, action) {
  switch (action.type) {
    case 'SYSTEM_ERROR':
      return {
        ...state,
        gettingList     : false,
        gettingStatuses : false
      };

    case 'REQUEST_GET_LIST':
      return {
        ...state,
        gettingList     : true
      };

    case 'SUCCESS_GET_LIST':
      return {
        ...state,
        gettingList : false,
        list : action.payload.data
      };

    case 'FAILURE_GET_LIST':
      return {
        ...state,
        gettingList : false
      };

    case 'REQUEST_GET_LISTS_STATUSES':
      return {
        ...state,
        gettingStatuses : true
      };

    case 'SUCCESS_GET_LISTS_STATUSES':
      return {
        ...state,
        gettingStatuses : false,
        statuses : action.payload.data
      };

    case 'FAILURE_GET_LISTS_STATUSES':
      return {
        ...state,
        gettingStatuses : false
      };

    case 'SUCCESS_STREAM_SITE':
      return {
        ...state,
        statuses : [
          action.payload.data,
          ...state.statuses
        ]
      };

    case 'RESET_TIMELINE':
      return {
        ...state,
        list : [],
        statuses : []
      };

    default:
      break;
  }
  return state;
};
