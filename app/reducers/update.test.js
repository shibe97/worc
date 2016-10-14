import updateReducer from './update';

const initialItems = {
  update: '',
  remainingCharacters: 140,
  postingUpdate: false
};

describe('request post update', () => {
  const action = {
    type : 'REQUEST_POST_UPDATE'
  };
  test('set a requesting flag', () => {
    expect(updateReducer(initialItems, action).postingUpdate).toBe(true);
  });
});

describe('success post update', () => {
  const action = {
    type : 'SUCCESS_POST_UPDATE'
  };
  test('drop a requesting flag', () => {
    expect(updateReducer(initialItems, action).postingUpdate).toBe(false);
  });
  test('delete update', () => {
    expect(updateReducer(initialItems, action).update).toBe('');
  });
});

describe('failure post update', () => {
  const action = {
    type : 'FAILURE_POST_UPDATE'
  };
  test('drop a requesting flag', () => {
    expect(updateReducer(initialItems, action).postingUpdate).toBe(false);
  });
});

describe('input update', () => {
  const text = 'input update test.';
  const action = {
    type : 'INPUT_UPDATE',
    payload : text
  };
  test('set update', () => {
    expect(updateReducer(initialItems, action).update).toBe(text);
  });
  test('match remainingCharacters', () => {
    expect(updateReducer(initialItems, action).remainingCharacters).toBe(140 - text.length);
  });
});
