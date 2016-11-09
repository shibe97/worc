import { call, take } from 'redux-saga/effects';
import { REQUEST_STREAM_USER, successStreamUser, REQUEST_STREAM_LISTS, successStreamLists } from '../../actions/userStream';
import { createTwitterClient } from '../../utils/twitterClient';

export function* handleStreamUser() {
  const { dispatch } = yield take(REQUEST_STREAM_USER);
  const client = yield call(createTwitterClient);
  client.twStream('user', {}, (stream) => {
    stream.on('data', (data) => {
      dispatch(successStreamUser({ data }));
    });
  });
}

export function* handleStreamLists() {
  const { dispatch, listId } = yield take(REQUEST_STREAM_LISTS);
  const client = yield call(createTwitterClient);
  const { data } = yield client.twGetPromise('lists/members', { list_id: listId, count: 1000 });
  const users = data.users.map((user) => {
    return user.id_str;
  }).join(',');
  client.twStream('user', { friends: users }, (stream) => {
    stream.on('data', (data) => {
      dispatch(successStreamLists({ data }));
    });
  });
}
