import { connect } from 'react-redux';
import RetweetTrigger from '../../components/Atoms/RetweetTrigger/RetweetTrigger';
import { openRetweetModal } from '../../actions/retweet';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  openRetweetModal(tweet) {
    dispatch(openRetweetModal(tweet));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RetweetTrigger);
