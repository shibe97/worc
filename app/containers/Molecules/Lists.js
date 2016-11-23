import { connect } from 'react-redux';
import Lists from '../../components/Molecules/Lists/Lists';
import { requestGetList } from '../../actions/lists';

const mapStateToProps = state => ({
  gettingList: state.listsReducer.gettingList,
  list: state.listsReducer.list
});

const mapDispatchToProps = dispatch => ({
  requestGetList() {
    dispatch(requestGetList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
