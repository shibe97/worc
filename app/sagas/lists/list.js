import { call, put, fork, take } from 'redux-saga/effects';
import { REQUEST_GET_LIST, successGetList, failureGetList } from '../../actions/lists';
import { createTwitterClient } from '../../utils/twitterClient';

export default function* handleGetList() {
    while (true) {
        const { payload } = yield take(REQUEST_GET_LIST);
        const client = yield call(createTwitterClient);
        console.log(payload);
        const { data, error } = yield client.twGetPromise('lists/list', {user_id : payload});
        if (error) {
            yield put(failureGetList({ error }));
        } else {
            yield put(successGetList({ data }));
        }
    }
}
