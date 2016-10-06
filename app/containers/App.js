import { connect }    from 'react-redux';
import App            from '../components/app';
import { requestStreamUser } from '../actions/userStream';
import { resetTimeline } from '../actions/timeline';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  requestStreamUser() {
    dispatch(requestStreamUser(dispatch));
  },
  resetTimeline() {
    dispatch(resetTimeline(dispatch));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
