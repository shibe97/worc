import { call, put, fork, take } from 'redux-saga/effects';
import handleGetHomeTimeline from './homeTimeline';
import handleGetMentionsTimeline from './mentionsTimeline';
import handlePostUpdate from './update';

export default function* rootSaga() {
    yield fork(handleGetHomeTimeline);
    yield fork(handleGetMentionsTimeline);
    yield fork(handlePostUpdate);
}
