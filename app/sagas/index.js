import { fork } from 'redux-saga/effects';
import handleGetHomeTimeline from './statuses/homeTimeline';
import handleGetUserTimeline from './statuses/userTimeline';
import handleGetMentionsTimeline from './statuses/mentionsTimeline';
import handlePostUpdate from './statuses/update';
import { handlePostFavoritesCreate, handlePostFavoritesDestroy } from './favorites/favorites';
import { handlePostRetweet } from './statuses/retweet';
import { handleStreamUser, handleStreamLists } from './streams/userStream';
import { handleStreamSiteTrack } from './streams/siteStream';
import handleGetList from './lists/list';
import handleGetListsStatuses from './lists/statuses';
import handleGetSearchTweets from './search/tweets';

export default function* rootSaga() {
  yield fork(handleGetHomeTimeline);
  yield fork(handleGetUserTimeline);
  yield fork(handleGetMentionsTimeline);
  yield fork(handlePostUpdate);
  yield fork(handlePostFavoritesCreate);
  yield fork(handlePostFavoritesDestroy);
  yield fork(handlePostRetweet);
  yield fork(handleStreamUser);
  yield fork(handleStreamLists);
  yield fork(handleStreamSiteTrack);
  yield fork(handleGetList);
  yield fork(handleGetListsStatuses);
  yield fork(handleGetSearchTweets);
}
