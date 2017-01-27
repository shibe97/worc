import { connect } from 'react-redux';
import ListsTimeline from '../../components/Modules/ListsTimeline/ListsTimeline';
import { requestGetListsStatuses } from '../../actions/lists';
import { requestStreamSiteFollow } from '../../actions/siteStream';
import { requestGetUsersShow } from '../../actions/users';

const mapStateToProps = state => ({
  gettingTimeline: state.listsReducer.gettingStatuses,
  timeline: state.listsReducer.statuses,
  user: state.userReducer.user
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestGetTimeline() {
    dispatch(requestGetListsStatuses(ownProps.params.listId));
  },
  requestStreamSiteFollow() {
    dispatch(requestStreamSiteFollow(
      dispatch,
      ownProps.params.listId
    ));
  },
  requestGetUsersShow(id) {
    dispatch(requestGetUsersShow(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ListsTimeline);
