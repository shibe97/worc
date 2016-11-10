import { connect } from 'react-redux';
import ListsTimeline from '../components/ListsTimeline';
import { requestGetListsStatuses } from '../actions/lists';
import { requestStreamSiteFollow } from '../actions/siteStream';

const mapStateToProps = (state) => {
  return {
    gettingTimeline : state.listsReducer.gettingStatuses,
    timeline        : state.listsReducer.statuses,
    user            : state.userReducer.user
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestGetTimeline() {
    dispatch(requestGetListsStatuses(ownProps.params.listId));
  },
  requestStreamSiteFollow() {
    dispatch(requestStreamSiteFollow(
      dispatch,
      ownProps.params.listId
    ));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ListsTimeline);
