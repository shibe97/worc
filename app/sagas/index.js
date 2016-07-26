import { call, put, fork, take } from 'redux-saga/effects';
import handleGetHomeTimeline from './statuses/homeTimeline';
import handleGetMentionsTimeline from './statuses/mentionsTimeline';
import handlePostUpdate from './statuses/update';
import { handlePostFavoritesCreate, handlePostFavoritesDestroy } from './favorites/favorites';
import { handlePostRetweet } from './statuses/retweet';
import handleStreamUser from './streams/userStream';
import handleGetList from './lists/list';

export default function* rootSaga() {
    yield fork(handleGetHomeTimeline);
    yield fork(handleGetMentionsTimeline);
    yield fork(handlePostUpdate);
    yield fork(handlePostFavoritesCreate);
    yield fork(handlePostFavoritesDestroy);
    yield fork(handlePostRetweet);
    yield fork(handleStreamUser);
    yield fork(handleGetList);
}
