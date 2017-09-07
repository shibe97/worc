import { connect } from 'react-redux';
import ReplyForm from '../../components/Molecules/ReplyForm/ReplyForm';
import { inputReply, requestPostReply } from '../../actions/reply';

const mapStateToProps = state => ({
  data: state.replyReducer
});

const mapDispatchToProps = dispatch => ({
  inputReply(value) {
    dispatch(inputReply(value));
  },
  requestPostReply(params) {
    dispatch(requestPostReply(params));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ReplyForm);
