import { call, put, fork, take } from 'redux-saga/effects';
import { REQUEST_POST_FAVORITES_CREATE, successPostFavoritesCreate, failurePostFavoritesCreate } from '../actions/favorites';
import { createTwitterClient } from '../utils/twitterClient';

export default function* handlePostFavoritesCreate() {
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
