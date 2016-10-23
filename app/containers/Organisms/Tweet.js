import { connect } from 'react-redux';
import Tweet from '../../components/Organisms/Tweet/Tweet';
import { setUser } from '../../actions/user';

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => ({
  setUser(user) {
    dispatch(setUser(user));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Tweet);
