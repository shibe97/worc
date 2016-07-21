import { connect }    from 'react-redux';
import App            from '../components/app';
import { requestStreamUser } from '../actions/userStream';

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestStreamUser : () => {
            dispatch(requestStreamUser(dispatch));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
