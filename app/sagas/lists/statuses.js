import { call, put, take } from 'redux-saga/effects';
import { REQUEST_GET_LISTS_STATUSES, successGetListsStatuses, failureGetListsStatues } from '../../actions/lists';
import { createTwitterClient } from '../../utils/twitterClient';

export default function* handleGetListsStatuses() {
  while (true) {
    const { payload } = yield take(REQUEST_GET_LISTS_STATUSES);
    const client = yield call(createTwitterClient);
    const { data, error } = yield client.twGetPromise('lists/statuses', { list_id : payload, count : 200 });
    if (error) {
      yield put(failureGetListsStatuses({ error }));
    } else {
      yield put(successGetListsStatuses({ data }));
    }
  }
}
