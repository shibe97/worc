import { connect } from 'react-redux';
import Timeline from '../../components/Modules/Timeline/Timeline';
import { requestGetMentionsTimeline } from '../../actions/timeline';

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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
