import { connect } from 'react-redux';
import HomeTimeline from '../components/HomeTimeline';
import { requestGetHomeTimeline } from '../actions/homeTimeline';

const mapStateToProps = (state) => {
    return {
        data : state.homeTimelineReducer
    };
}

const mapDispatchToProps = (dispatch) => ({
    requestGetHomeTimeline() {
        dispatch(requestGetHomeTimeline());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeTimeline);
