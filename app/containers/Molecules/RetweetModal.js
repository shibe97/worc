import { connect } from 'react-redux';
import RetweetModal from '../../components/Molecules/RetweetModal/RetweetModal';
import { requestPostRetweet, closeRetweetModal } from '../../actions/retweet';

const mapStateToProps = state => ({
  modal: state.retweetReducer.modal,
  tweet: state.retweetReducer.tweet
});

const mapDispatchToProps = dispatch => ({
  closeRetweetModal() {
    dispatch(closeRetweetModal());
  },
  requestPostRetweet(tweetId) {
    dispatch(requestPostRetweet(tweetId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RetweetModal);
