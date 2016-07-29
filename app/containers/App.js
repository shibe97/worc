import { connect }    from 'react-redux';
import App            from '../components/app';
import { requestStreamUser } from '../actions/userStream';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  requestStreamUser() {
    dispatch(requestStreamUser(dispatch));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
