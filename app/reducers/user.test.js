import userReducer from './user';

const initialItems = {
  user  : {},
  modal : false
};

describe('set user', () => {
  const action = {
    type : 'SET_USER'
  };
  test('set a modal flag', () => {
    expect(userReducer(initialItems, action).modal).toBe(true);
  });
});
