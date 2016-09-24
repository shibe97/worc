const initialState = {
  user : {}
};

export default function userReducer (state = initialState, action) {
  switch (action.type) {
    case 'SET_USER':
      console.log(action.payload);
      return {
        ...state,
        user : action.payload
      };

    default:
      break;
  }
  return state;
};
