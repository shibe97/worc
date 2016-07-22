import { connect } from 'react-redux';
import MentionsTimeline from '../components/MentionsTimeline';
import { requestGetMentionsTimeline } from '../actions/mentionsTimeline';

const mapStateToProps = (state) => {
    return {
        data : state.mentionsTimelineReducer
    };
}

const mapDispatchToProps = (dispatch) => ({
    requestGetMentionsTimeline() {
        dispatch(requestGetMentionsTimeline());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MentionsTimeline);
