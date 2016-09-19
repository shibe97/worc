import { call, take } from 'redux-saga/effects';
import { REQUEST_STREAM_SITE, successStreamSite } from '../../actions/siteStream';
import { createTwitterClient } from '../../utils/twitterClient';

export default function* handleStreamSite() {
  const { dispatch, listId } = yield take(REQUEST_STREAM_SITE);
  const client = yield call(createTwitterClient);
  const { data } = yield client.twGetPromise('lists/members', { list_id: listId, count: 1000 });
  const users = data.users.map((user) => {
    return user.id_str;
  }).join(',');
  client.twStream('statuses/filter', { follow: users }, (stream) => {
    stream.on('data', (data) => {
      dispatch(successStreamSite({ data }));
    });
  });
}
