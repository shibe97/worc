import { connect } from 'react-redux';
import Timeline from '../components/Timeline';
import { requestGetListsStatuses } from '../actions/lists';
import { setUser } from '../actions/user';
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
  },
  setUser(user) {
    dispatch(setUser(user));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
