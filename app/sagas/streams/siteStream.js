import { call, take } from 'redux-saga/effects';
import { REQUEST_STREAM_SITE_FOLLOW, successStreamSiteFollow, REQUEST_STREAM_SITE_TRACK, successStreamSiteTrack } from '../../actions/siteStream';
import { createTwitterClient } from '../../utils/twitterClient';

export function* handleStreamSiteFollow() {
  const { dispatch, listId } = yield take(REQUEST_STREAM_SITE_FOLLOW);
  const client = yield call(createTwitterClient);
  const { data } = yield client.twGetPromise('lists/members', { list_id: listId, count: 1000 });
  const users = data.users.map(user => user.id_str).join(',');
  client.twStream('statuses/filter', { follow: users }, (stream) => {
    stream.on('data', (followData) => {
      dispatch(successStreamSiteFollow({ followData }));
    });
  });
}

export function* handleStreamSiteTrack() {
  const { dispatch, keyword } = yield take(REQUEST_STREAM_SITE_TRACK);
  const client = yield call(createTwitterClient);
  client.twStream('statuses/filter', { track: keyword }, (stream) => {
    stream.on('data', (trackData) => {
      dispatch(successStreamSiteTrack({ trackData }));
    });
  });
}
