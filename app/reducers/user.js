const initialState = {
  user: {},
  modal: false
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER':
    case 'SUCCESS_GET_USERS_SHOW':
      return {
        ...state,
        modal: true,
        user: action.payload
      };

    case 'CLOSE_USER_MODAL':
      return {
        ...state,
        modal: false
      };

    default:
      break;
  }
  return state;
}
