import { call, put, take } from 'redux-saga/effects';
import { REQUEST_GET_MENTIONS_TIMELINE, successGetMentionsTimeline, failureGetMentionsTimeline } from '../../actions/mentionsTimeline';
import { createTwitterClient } from '../../utils/twitterClient';

export default function* handleGetMentionsTimeline() {
  while (true) {
    yield take(REQUEST_GET_MENTIONS_TIMELINE);
    const client = yield call(createTwitterClient);
    const { data, error } = yield client.twGetPromise('statuses/mentions_timeline', { count: 200 });
    if (error) {
      yield put(failureGetMentionsTimeline({ error }));
    } else {
      yield put(successGetMentionsTimeline({ data }));
    }
  }
}
