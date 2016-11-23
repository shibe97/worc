import { connect } from 'react-redux';
import RetweetTrigger from '../../components/Atoms/RetweetTrigger/RetweetTrigger';
import { openRetweetModal } from '../../actions/retweet';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  openRetweetModal(tweetId) {
    dispatch(openRetweetModal(tweetId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RetweetTrigger);
