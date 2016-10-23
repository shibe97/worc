import { connect } from 'react-redux';
import Timeline from '../components/Timeline';
import { requestGetListsStatuses } from '../actions/lists';
import { requestStreamSite } from '../actions/siteStream';

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
  requestStreamSite() {
    dispatch(requestStreamSite(
      dispatch,
      ownProps.params.listId
    ));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
