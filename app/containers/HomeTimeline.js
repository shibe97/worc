import { connect } from 'react-redux';
import Timeline from '../components/Timeline';
import { requestGetHomeTimeline } from '../actions/timeline';
import { setUser } from '../actions/user';

const mapStateToProps = (state) => {
  return {
    gettingTimeline : state.homeTimelineReducer.gettingTimeline,
    timeline        : state.homeTimelineReducer.timeline,
    user            : state.userReducer.user,
    userModal       : state.userReducer.modal
  };
}

const mapDispatchToProps = (dispatch) => ({
  requestGetTimeline() {
    dispatch(requestGetHomeTimeline());
  },
  setUser(user) {
    dispatch(setUser(user));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
