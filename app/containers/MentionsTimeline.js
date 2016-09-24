import { connect } from 'react-redux';
import Timeline from '../components/Timeline';
import { requestGetMentionsTimeline, setUser } from '../actions/timeline';
import { requestPostFavoritesCreate, requestPostFavoritesDestroy } from '../actions/favorites';
import { requestPostRetweet } from '../actions/retweet';

const mapStateToProps = (state) => {
  return {
    gettingTimeline : state.mentionsTimelineReducer.gettingTimeline,
    timeline        : state.mentionsTimelineReducer.timeline
  };
}

const mapDispatchToProps = (dispatch) => ({
  requestGetTimeline() {
    dispatch(requestGetMentionsTimeline());
  },
  requestPostFavoritesCreate(tweetId) {
    dispatch(requestPostFavoritesCreate(tweetId));
  },
  requestPostFavoritesDestroy(tweetId) {
    dispatch(requestPostFavoritesDestroy(tweetId));
  },
  requestPostRetweet(tweetId) {
    dispatch(requestPostRetweet(tweetId));
  },
  setUser(user) {
    dispatch(setUser(user));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
