import { connect } from 'react-redux';
import Timeline from '../components/Timeline';
import { requestGetMentionsTimeline } from '../actions/timeline';
import { setUser } from '../actions/user';

const mapStateToProps = (state) => {
  return {
    gettingTimeline : state.mentionsTimelineReducer.gettingTimeline,
    timeline        : state.mentionsTimelineReducer.timeline,
    user            : state.userReducer.user
  };
}

const mapDispatchToProps = (dispatch) => ({
  requestGetTimeline() {
    dispatch(requestGetMentionsTimeline());
  },
  setUser(user) {
    dispatch(setUser(user));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
