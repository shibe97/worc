import { call, put, take } from 'redux-saga/effects';
import {
  REQUEST_POST_FAVORITES_CREATE,
  REQUEST_POST_FAVORITES_DESTROY,
  successPostFavoritesCreate,
  successPostFavoritesDestroy,
  failurePostFavoritesCreate,
  failurePostFavoritesDestroy
} from '../../actions/favorites';
import { createTwitterClient } from '../../utils/twitterClient';

export function* handlePostFavoritesCreate() {
  while (true) {
    const { payload } = yield take(REQUEST_POST_FAVORITES_CREATE);
    yield put(successPostFavoritesCreate({ id: payload }));
    const client = yield call(createTwitterClient);
    const { error } = yield client.twPostPromise('favorites/create', { id: payload });
    if (error) {
      yield put(failurePostFavoritesCreate({ error }));
    }
  }
}

export function* handlePostFavoritesDestroy() {
  while (true) {
    const { payload } = yield take(REQUEST_POST_FAVORITES_DESTROY);
    yield put(successPostFavoritesDestroy({ id: payload }));
    const client = yield call(createTwitterClient);
    const { error } = yield client.twPostPromise('favorites/destroy', { id: payload });
    if (error) {
      yield put(failurePostFavoritesDestroy({ error }));
    }
  }
}
