import { connect } from 'react-redux';
import FavoriteTrigger from '../../components/Atoms/FavoriteTrigger/FavoriteTrigger';
import { requestPostFavoritesCreate, requestPostFavoritesDestroy } from '../../actions/favorites';

const mapStateToProps = () => {
  return {};
}

const mapDispatchToProps = (dispatch) => ({
  requestPostFavoritesCreate(tweetId) {
    dispatch(requestPostFavoritesCreate(tweetId));
  },
  requestPostFavoritesDestroy(tweetId) {
    dispatch(requestPostFavoritesDestroy(tweetId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteTrigger);
