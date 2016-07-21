import React, { Component } from 'react';
import { connect } from 'react-redux';
import Timeline from '../components/Timeline';
import { requestGetHomeTimeline } from '../actions/homeTimeline';
import { requestStreamUser } from '../actions/userStream';

class HomeTimeline extends Component {
    componentDidMount() {
        this.props.dispatch(requestGetHomeTimeline());
        this.props.dispatch(requestStreamUser(this.props.dispatch));
    }

    render() {
        return (
            <Timeline timeline={this.props.data.homeTimeline} gettingTimeline={this.props.data.gettingHomeTimeline} dispatch={this.props.dispatch} />
        );
    }
}

export default connect(function (state) {
    return {
        data : state.homeTimelineReducer
    };
})(HomeTimeline);
