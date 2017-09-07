import { connect } from 'react-redux';
import ReplyModal from '../../components/Molecules/ReplyModal/ReplyModal';
import { requestPostReply, closeReplyModal } from '../../actions/reply';

const mapStateToProps = state => ({
  modal: state.replyReducer.modal,
  tweet: state.replyReducer.tweet
});

const mapDispatchToProps = dispatch => ({
  closeReplyModal() {
    dispatch(closeReplyModal());
  },
  requestPostReply(tweetId) {
    dispatch(requestPostReply(tweetId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ReplyModal);
