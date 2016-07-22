import React, { Component } from 'react';
import Timeline from '../components/Timeline';

export default class HomeTimeline extends Component {
    componentDidMount() {
        this.props.requestGetHomeTimeline();
    }

    render() {
        return (
            <Timeline timeline={this.props.data.homeTimeline} gettingTimeline={this.props.data.gettingHomeTimeline} dispatch={this.props.dispatch} />
        );
    }
}
