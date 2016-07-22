import { connect } from 'react-redux';
import Timeline from '../components/Timeline';
import { requestGetMentionsTimeline } from '../actions/mentionsTimeline';
import { requestPostFavoritesCreate, requestPostFavoritesDestroy } from '../actions/favorites';
import { requestPostRetweet } from '../actions/retweet';

const mapStateToProps = (state) => {
    return {
        data : state.mentionsTimelineReducer
    };
}

const mapDispatchToProps = (dispatch) => ({
    requestGetTimeline() {
        dispatch(requestGetMentionsTimeline());
    },
    requestPostFavoritesCreate(tweetId) {
        dispatch(requestPostFavoritesCreate(tweetId));
    },
    requestPostFavoritesDestroy(tweetId) {
        dispatch(requestPostFavoritesDestroy(tweetId));
    },
    requestPostRetweet(tweetId) {
        dispatch(requestPostRetweet(tweetId));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
