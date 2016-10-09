import { call, put, take } from 'redux-saga/effects';
import { REQUEST_GET_USER_TIMELINE, successGetUserTimeline, failureGetUserTimeline } from '../../actions/timeline';
import { createTwitterClient } from '../../utils/twitterClient';

export default function* handleGetUserTimeline() {
  while (true) {
    const { payload } = yield take(REQUEST_GET_USER_TIMELINE);
    const client = yield call(createTwitterClient);
    const { data, error } = yield client.twGetPromise('statuses/user_timeline', { user_id: payload, count: 200 });
    if (error) {
      yield put(failureGetUserTimeline({ error }));
    } else {
      yield put(successGetUserTimeline({ data }));
    }
  }
}
