import React, { Component } from 'react';
import { connect } from 'react-redux';
import Timeline from '../components/Timeline';
import { requestGetMentionsTimeline } from '../actions/mentionsTimeline';

class MentionsTimeline extends Component {
    componentDidMount() {
        this.props.dispatch(requestGetMentionsTimeline());
    }

    render() {
        return (
            <Timeline timeline={this.props.data.mentionsTimeline} gettingTimeline={this.props.data.gettingMentionsTimeline} />
        );
    }
}

export default connect(function (state) {
    return {
        data : state.mentionsTimelineReducer
    };
})(MentionsTimeline);
