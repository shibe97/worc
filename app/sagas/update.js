import { call, put, fork, take } from 'redux-saga/effects';
import { REQUEST_POST_UPDATE, successPostUpdate, failurePostUpdate } from '../actions/update';
import { createTwitterClient } from '../utils/twitterClient';

export default function* handlePostUpdate() {
    while (true) {
        const { payload } = yield take(REQUEST_POST_UPDATE);
        const client = yield call(createTwitterClient);
        const { data, error } = yield client.twPostPromise('statuses/update', {status : payload});
        if (error) {
            yield put(failurePostUpdate({ error }));
        } else {
            yield put(successPostUpdate({ data }));
        }
    }
}
