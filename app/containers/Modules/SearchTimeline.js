import { connect } from 'react-redux';
import SearchTimeline from '../../components/Modules/SearchTimeline/SearchTimeline';
import { requestGetSearchTweets, inputQuery } from '../../actions/search';
import { requestStreamSiteTrack } from '../../actions/siteStream';

const mapStateToProps = (state) => {
  return {
    gettingTimeline : state.searchReducer.gettingStatuses,
    timeline        : state.searchReducer.statuses,
    query           : state.searchReducer.query,         
    user            : state.userReducer.user
  };
}

const mapDispatchToProps = (dispatch) => ({
  inputQuery(value) {
    dispatch(inputQuery(value));
  },
  requestGetTimeline(q) {
    dispatch(requestGetSearchTweets(q));
  },
  requestStreamSiteTrack(keyword) {
    dispatch(requestStreamSiteTrack(
      dispatch,
      keyword
    ));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchTimeline);
