import { call, put, fork, take } from 'redux-saga/effects';
import handleGetHomeTimeline from './homeTimeline';
import handleGetMentionsTimeline from './mentionsTimeline';
import handlePostUpdate from './update';
import { handlePostFavoritesCreate, handlePostFavoritesDestroy } from './favorites';
import { handlePostRetweet } from './retweet';

export default function* rootSaga() {
    yield fork(handleGetHomeTimeline);
    yield fork(handleGetMentionsTimeline);
    yield fork(handlePostUpdate);
    yield fork(handlePostFavoritesCreate);
    yield fork(handlePostFavoritesDestroy);
    yield fork(handlePostRetweet);
}
