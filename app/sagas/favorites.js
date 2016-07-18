import { call, put, fork, take } from 'redux-saga/effects';
import { REQUEST_POST_FAVORITES_CREATE, REQUEST_POST_FAVORITES_DESTROY, successPostFavoritesCreate, successPostFavoritesDestroy, failurePostFavoritesCreate, failurePostFavoritesDestroy } from '../actions/favorites';
import { createTwitterClient } from '../utils/twitterClient';

export function* handlePostFavoritesCreate() {
    while (true) {
        const { payload } = yield take(REQUEST_POST_FAVORITES_CREATE);
        const client = yield call(createTwitterClient);
        const { data, error } = yield client.twPostPromise('favorites/create', {id : payload});
        if (error) {
            yield put(failurePostFavoritesCreate({ error }));
        } else {
            yield put(successPostFavoritesCreate({ id : payload }));
        }
    }
}

export function* handlePostFavoritesDestroy() {
    while (true) {
        const { payload } = yield take(REQUEST_POST_FAVORITES_DESTROY);
        const client = yield call(createTwitterClient);
        const { data, error } = yield client.twPostPromise('favorites/destroy', {id : payload});
        if (error) {
            yield put(failurePostFavoritesDestroy({ error }));
        } else {
            yield put(successPostFavoritesDestroy({ id : payload }));
        }
    }
}
