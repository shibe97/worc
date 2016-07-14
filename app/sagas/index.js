import { call, put, fork, take } from 'redux-saga/effects';
import { REQUEST_GET_HOME_TIMELINE, successGetHomeTimeline, failureGetHomeTimeline } from '../actions/homeTimeline';
import { REQUEST_GET_MENTIONS_TIMELINE, successGetMentionsTimeline, failureGetMentionsTimeline } from '../actions/mentionsTimeline';
import { REQUEST_POST_UPDATE, successPostUpdate, failurePostUpdate } from '../actions/update';
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

function* handleGetMentionsTimeline() {
    while (true) {
        const { payload } = yield take(REQUEST_GET_MENTIONS_TIMELINE);
        const client = yield call(createTwitterClient);
        const { data, error } = yield client.twGetPromise('statuses/mentions_timeline', {count : 200});
        if (error) {
            yield put(failureGetMentionsTimeline({ error }));
        } else {
            yield put(successGetMentionsTimeline({ data }));
        }
    }
}

function* handlePostUpdate() {
    while (true) {
        const { payload } = yield take(REQUEST_POST_UPDATE);
        const client = yield call(createTwitterClient);
        console.log(payload);
        const { data, error } = yield client.twPostPromise('statuses/update', {status : payload});
        if (error) {
            yield put(failurePostUpdate({ error }));
        } else {
            yield put(successPostUpdate({ data }));
        }
    }
}

export default function* rootSaga() {
    yield fork(handleGetHomeTimeline);
    yield fork(handleGetMentionsTimeline);
    yield fork(handlePostUpdate);
}
