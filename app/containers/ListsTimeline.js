import { connect } from 'react-redux';
import Timeline from '../components/Timeline';
import { requestGetListsStatuses } from '../actions/lists';
import { requestPostFavoritesCreate, requestPostFavoritesDestroy } from '../actions/favorites';
import { requestPostRetweet } from '../actions/retweet';
import { requestStreamSite } from '../actions/siteStream';

const mapStateToProps = (state) => {
  return {
    gettingTimeline : state.listsReducer.gettingStatuses,
    timeline        : state.listsReducer.statuses
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestGetTimeline() {
    dispatch(requestGetListsStatuses(ownProps.params.listId));
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
  requestStreamSite() {
    dispatch(requestStreamSite(
      dispatch,
      ownProps.params.listId
    ));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
