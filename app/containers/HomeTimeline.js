import React, { Component } from 'react';
import { connect } from 'react-redux';
import Timeline from '../components/Timeline';
import { requestGetHomeTimeline } from '../actions/homeTimeline';

class HomeTimeline extends Component {
    componentDidMount() {
        this.props.dispatch(requestGetHomeTimeline());
    }

    render() {
        return (
            <Timeline timeline={this.props.data.homeTimeline} gettingTimeline={this.props.data.gettingHomeTimeline} />
        );
    }
}

export default connect(function (state) {
    return {
        data : state.homeTimelineReducer
    };
})(HomeTimeline);
