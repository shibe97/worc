import { connect } from 'react-redux';
import User from '../components/User';
import { closeUserModal } from '../actions/user';

const mapStateToProps = (state) => {
  return {
    user : state.userReducer
  };
}

const mapDispatchToProps = (dispatch) => ({
  closeUserModal() {
    dispatch(closeUserModal());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
