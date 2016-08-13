import { call, put, take } from 'redux-saga/effects';
import { REQUEST_GET_LIST, successGetList, failureGetList } from '../../actions/lists';
import { createTwitterClient } from '../../utils/twitterClient';

export default function* handleGetList() {
  while (true) {
    yield take(REQUEST_GET_LIST);
    const client = yield call(createTwitterClient);
    const { data, error } = yield client.twGetPromise('lists/list', { user_id: client.user_id });
    if (error) {
      yield put(failureGetList({ error }));
    } else {
      yield put(successGetList({ data }));
    }
  }
}
