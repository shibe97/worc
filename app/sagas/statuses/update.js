import { call, put, take } from 'redux-saga/effects';
import { REQUEST_POST_UPDATE, successPostUpdate, failurePostUpdate } from '../../actions/update';
import { REQUEST_POST_REPLY, successPostReply, failurePostReply } from '../../actions/reply';
import { createTwitterClient } from '../../utils/twitterClient';

export function* handlePostUpdate() {
  while (true) {
    const { payload } = yield take(REQUEST_POST_UPDATE);
    const client = yield call(createTwitterClient);
    const { data, error } = yield client.twPostPromise('statuses/update', payload);
    if (error) {
      yield put(failurePostUpdate({ error }));
    } else {
      yield put(successPostUpdate({ data }));
    }
  }
}

export function* handlePostReply() {
  while (true) {
    const { payload } = yield take(REQUEST_POST_REPLY);
    const client = yield call(createTwitterClient);
    const { data, error } = yield client.twPostPromise('statuses/update', payload);
    if (error) {
      yield put(failurePostReply({ error }));
    } else {
      yield put(successPostReply({ data }));
    }
  }
}
