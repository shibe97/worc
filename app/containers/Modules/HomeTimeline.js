import { connect } from 'react-redux';
import Timeline from '../../components/Modules/Timeline/Timeline';
import { requestGetHomeTimeline } from '../../actions/timeline';
import { requestGetUsersShow } from '../../actions/users';
import { requestGetSearchTweets } from '../../actions/search';

const mapStateToProps = state => ({
  gettingTimeline: state.homeTimelineReducer.gettingTimeline,
  timeline: state.homeTimelineReducer.timeline,
  user: state.userReducer.user,
  userModal: state.userReducer.modal
});

const mapDispatchToProps = dispatch => ({
  requestGetTimeline() {
    dispatch(requestGetHomeTimeline());
  },
  requestGetUsersShow(id) {
    dispatch(requestGetUsersShow(id));
  },
  requestGetSearchTweets(q) {
    dispatch(requestGetSearchTweets(q));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
