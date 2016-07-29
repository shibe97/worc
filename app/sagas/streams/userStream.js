import { call, put, fork, take } from 'redux-saga/effects';
import { REQUEST_STREAM_USER, successStreamUser, failureStreamUser } from '../../actions/userStream';
import { createTwitterClient } from '../../utils/twitterClient';

export default function* handleStreamUser() {
  const { dispatch } = yield take(REQUEST_STREAM_USER);
  const client = yield call(createTwitterClient);
  client.twStream('user', {}, (stream) => {
    stream.on('data', (data) => {
      dispatch(successStreamUser({ data }));
    });
  });
}
