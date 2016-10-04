import { connect } from 'react-redux';
import Retweet from '../components/Retweet';
import { requestPostRetweet, closeRetweetModal } from '../actions/retweet';

const mapStateToProps = (state) => {
  return {
    modal   : state.retweetReducer.modal,
    tweetId : state.retweetReducer.tweetId
  };
}

const mapDispatchToProps = (dispatch) => ({
  closeRetweetModal() {
    dispatch(closeRetweetModal());
  },
  requestPostRetweet(tweetId) {
    dispatch(requestPostRetweet(tweetId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Retweet);
