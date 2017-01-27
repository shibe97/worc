import { call, put, take } from 'redux-saga/effects';
import { REQUEST_GET_USERS_SHOW, successGetUsersShow, failureGetUsersShow } from '../../actions/users';
import { createTwitterClient } from '../../utils/twitterClient';

export default function* handleGetUsersShow() {
  while (true) {
    const { payload } = yield take(REQUEST_GET_USERS_SHOW);
    const client = yield call(createTwitterClient);
    const { data, error } = yield client.twGetPromise('users/show', { user_id: payload });
    if (error) {
      yield put(failureGetUsersShow({ error }));
    } else {
      yield put(successGetUsersShow(data));
    }
  }
}
