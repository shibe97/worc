import React, { Component } from 'react';
import { connect } from 'react-redux';
import storage from 'electron-json-storage';
import TwitterClient from '../utils/twitterClient';
import Tweet from '../components/Tweet';
import { requestGetMentionsTimeline } from '../actions/mentionsTimeline';

class MentionsTimeline extends Component {
    componentDidMount() {
        this.props.dispatch(requestGetMentionsTimeline());
    }

    shouldComponentUpdate(nextProps, nextState) {
        return JSON.stringify(this.props) !== JSON.stringify(nextProps);
    }

    returnMentionsTimeline(timeline) {
        if (timeline.length > 0) {
            return timeline.map((item, index) => {
                return <Tweet tweet={item} key={index} dispatch={this.props.dispatch} />;
            });
        }
    }

    render() {
        if (this.props.data.gettingMentionsTimeline) {
            return (
                <div className="List">
                    <div className="Loading" />
                </div>
            );
        }
        return (
            <ul className="List">
                {this.returnMentionsTimeline(this.props.data.mentionsTimeline)}
            </ul>
        );
    }
}

export default connect(function (state) {
    return {
        data : state.mentionsTimelineReducer
    };
})(MentionsTimeline);
