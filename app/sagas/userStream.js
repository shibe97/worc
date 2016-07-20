import { call, put, fork, take } from 'redux-saga/effects';
import { REQUEST_STREAM_USER, successStreamUser, failureStreamUser } from '../actions/userStream';
import { createTwitterClient } from '../utils/twitterClient';

export default function* handleStreamUser() {
    while (true) {
        const { payload } = yield take(REQUEST_STREAM_USER);
        const client = yield call(createTwitterClient);
        const { data, error } = yield client.twStreamPromise('user', {});
        console.log(data);
        if (error) {
            yield put(failureStreamUser({ error }));
        } else {
            yield put(successStreamUser({ data }));
        }
    }
}
