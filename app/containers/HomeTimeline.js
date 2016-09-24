import { connect } from 'react-redux';
import Timeline from '../components/Timeline';
import { requestGetHomeTimeline, setUser } from '../actions/timeline';
import { requestPostFavoritesCreate, requestPostFavoritesDestroy } from '../actions/favorites';
import { requestPostRetweet } from '../actions/retweet';

const mapStateToProps = (state) => {
  return {
    gettingTimeline : state.homeTimelineReducer.gettingTimeline,
    timeline        : state.homeTimelineReducer.timeline,
    user            : state.userReducer.user
  };
}

const mapDispatchToProps = (dispatch) => ({
  requestGetTimeline() {
    dispatch(requestGetHomeTimeline());
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
