import { connect } from 'react-redux';
import Timeline from '../../components/Modules/Timeline/Timeline';
import { requestGetHomeTimeline } from '../../actions/timeline';

const mapStateToProps = state => ({
  gettingTimeline: state.homeTimelineReducer.gettingTimeline,
  timeline: state.homeTimelineReducer.timeline,
  user: state.userReducer.user,
  userModal: state.userReducer.modal
});

const mapDispatchToProps = dispatch => ({
  requestGetTimeline() {
    dispatch(requestGetHomeTimeline());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
