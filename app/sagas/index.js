import { call, put, fork, take } from 'redux-saga/effects';
import { REQUEST_GET_HOME_TIMELINE, successGetHomeTimeline, failureGetHomeTimeline } from '../actions/homeTimeline';
import TwitterClient from '../utils/twitterClient';
import storage from 'electron-json-storage';

function createTwitterClient() {
    return new Promise((resolve, reject) => {
        storage.get('auth', (error, data) => {
            if (error || Object.keys(data).length === 0) {
                reject(new Error(error));
            } else {
                resolve(new TwitterClient(data));
            }
        });
    });
}

function* handleGetHomeTimeline() {
    while (true) {
        const { payload } = yield take(REQUEST_GET_HOME_TIMELINE);
        const client = yield call(createTwitterClient);
        const { data, error } = yield client.twGetPromise('statuses/home_timeline', {count : 200});
        if (error) {
            yield put(failureGetHomeTimeline({ error }));
        } else {
            yield put(successGetHomeTimeline({ data }));
        }
    }
}

export default function* rootSaga() {
    yield fork(handleGetHomeTimeline);
}
