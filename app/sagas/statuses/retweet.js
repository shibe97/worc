import { call, put, take } from 'redux-saga/effects';
import { REQUEST_POST_RETWEET, successPostRetweet, failurePostRetweet } from '../../actions/retweet';
import { createTwitterClient } from '../../utils/twitterClient';

export function* handlePostRetweet() {
  while (true) {
    const { payload } = yield take(REQUEST_POST_RETWEET);
    yield put(successPostRetweet({ id: payload }));
    const client = yield call(createTwitterClient);
    const { error } = yield client.twPostPromise(`statuses/retweet/${payload}`, {});
    if (error) {
      yield put(failurePostRetweet({ error }));
    }
  }
}
