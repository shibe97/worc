import { connect } from 'react-redux';
import Timeline from '../components/Timeline';
import { requestGetListsStatuses } from '../actions/lists';
import { requestPostFavoritesCreate, requestPostFavoritesDestroy } from '../actions/favorites';
import { requestPostRetweet } from '../actions/retweet';

const mapStateToProps = (state) => {
    return {
        gettingTimeline : state.listsReducer.gettingStatuses,
        timeline        : state.listsReducer.statuses
    };
}

const mapDispatchToProps = (dispatch) => ({
    requestGetTimeline() {
        dispatch(requestGetListsStatuses('142045715'));
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
