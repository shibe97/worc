import React, { Component } from 'react';
import Timeline from '../components/Timeline';

export default class MentionsTimeline extends Component {
    componentDidMount() {
        this.props.requestGetMentionsTimeline();
    }

    render() {
        return (
            <Timeline timeline={this.props.data.mentionsTimeline} gettingTimeline={this.props.data.gettingMentionsTimeline} dispatch={this.props.dispatch} />
        );
    }
}
