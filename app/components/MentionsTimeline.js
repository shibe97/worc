import React, { Component } from 'react';
import { connect } from 'react-redux';
import storage from 'electron-json-storage';
import TwitterClient from '../utils/twitterClient';

class MentionsTimeline extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        storage.get('auth', (error, data) => {
            if (error || Object.keys(data).length === 0) {
                throw error;
            } else {
                this.client = new TwitterClient(data);
                this.props.dispatch(this.client.getMentionsTimeline());
            }
        });
    }

    returnMentionsTimeline(timeline) {
        if (timeline.length > 0) {
            return timeline.map((item, index) => {
                return (
                    <li className="List__item" key={index}>
                        <dl>
                            <dt>
                                <span className="List__name">{item.user.name}</span>
                                <span className="List__screenName ml5px">@{item.user.screen_name}</span>
                            </dt>
                            <dd>{item.text}</dd>
                        </dl>
                    </li>    
                );
            });
        }
    }

    render() {
        if (this.props.data.gettingMentionsTimeline) {
            return (
                <div className="Loading" />
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
