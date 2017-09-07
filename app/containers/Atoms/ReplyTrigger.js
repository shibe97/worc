import { connect } from 'react-redux';
import ReplyTrigger from '../../components/Atoms/ReplyTrigger/ReplyTrigger';
import { openReplyModal } from '../../actions/reply';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  openReplyModal(tweet) {
    dispatch(openReplyModal(tweet));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ReplyTrigger);
