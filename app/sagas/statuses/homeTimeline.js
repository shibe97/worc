import { call, put, take } from 'redux-saga/effects';
import { REQUEST_GET_HOME_TIMELINE, successGetHomeTimeline, failureGetHomeTimeline } from '../../actions/homeTimeline';
import { createTwitterClient } from '../../utils/twitterClient';

export default function* handleGetHomeTimeline() {
  while (true) {
    yield take(REQUEST_GET_HOME_TIMELINE);
    const client = yield call(createTwitterClient);
    const { data, error } = yield client.twGetPromise('statuses/home_timeline', { count: 200 });
    if (error) {
      yield put(failureGetHomeTimeline({ error }));
    } else {
      yield put(successGetHomeTimeline({ data }));
    }
  }
}
