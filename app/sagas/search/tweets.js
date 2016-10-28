import { call, put, take } from 'redux-saga/effects';
import { REQUEST_GET_SEARCH_TWEETS, successGetSearchTweets, failureGetSearchTweets } from '../../actions/search';
import { createTwitterClient } from '../../utils/twitterClient';

export default function* handleGetSearchTweets() {
  while (true) {
    const { payload } = yield take(REQUEST_GET_SEARCH_TWEETS);
    const client = yield call(createTwitterClient);
    const { data, error } = yield client.twGetPromise('search/tweets', { q: payload, count: 200 });
    if (error) {
      yield put(failureGetSearchTweets({ error }));
    } else {
      yield put(successGetSearchTweets({ data }));
    }
  }
}
