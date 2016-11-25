import { connect } from 'react-redux';
import UserModal from '../../components/Modules/UserModal/UserModal';
import { closeUserModal } from '../../actions/user';

const mapStateToProps = state => ({
  user: state.userReducer
});

const mapDispatchToProps = dispatch => ({
  closeUserModal() {
    dispatch(closeUserModal());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserModal);
