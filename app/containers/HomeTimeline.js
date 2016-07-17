import React, { Component } from 'react';
import { connect } from 'react-redux';
import storage from 'electron-json-storage';
import TwitterClient from '../utils/twitterClient';
import Tweet from '../components/Tweet';
import { requestGetHomeTimeline } from '../actions/homeTimeline';

class HomeTimeline extends Component {
    componentDidMount() {
        this.props.dispatch(requestGetHomeTimeline());
    }

    returnHomeTimeline(timeline) {
        if (timeline.length > 0) {
            return timeline.map((item, index) => {
                return <Tweet tweet={item} key={index} dispatch={this.props.dispatch} />;
            });
        }
    }

    render() {
        if (this.props.data.gettingHomeTimeline) {
            return (
                <div className="List">
                    <div className="Loading" />
                </div>
            );
        }
        return (
            <ul className="List">
                {this.returnHomeTimeline(this.props.data.homeTimeline)}
            </ul>
        );
    }
}

export default connect(function (state) {
    return {
        data : state.homeTimelineReducer
    };
})(HomeTimeline);
