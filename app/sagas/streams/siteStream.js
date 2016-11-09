import { call, take } from 'redux-saga/effects';
import { REQUEST_STREAM_SITE_FOLLOW, successStreamSiteFollow, REQUEST_STREAM_SITE_TRACK, successStreamSiteTrack } from '../../actions/siteStream';
import { createTwitterClient } from '../../utils/twitterClient';

export function* handleStreamSiteTrack() {
  const { dispatch, keyword } = yield take(REQUEST_STREAM_SITE_TRACK);
  console.log(keyword);
  const client = yield call(createTwitterClient);
  client.twStream('statuses/filter', { track: keyword }, (stream) => {
    stream.on('data', (data) => {
      dispatch(successStreamSiteTrack({ data }));
    });
  });
}
