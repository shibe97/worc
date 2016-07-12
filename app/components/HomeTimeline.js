import React, { Component } from 'react';
import { connect } from 'react-redux';
import storage from 'electron-json-storage';
import TwitterClient from '../utils/twitterClient';

class HomeTimeline extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        storage.get('auth', (error, data) => {
            if (error || Object.keys(data).length === 0) {
                throw error;
            } else {
                this.client = new TwitterClient(data);
                this.props.dispatch(this.client.getHomeTimeline());
            }
        });
    }

    returnLinkedText(text, urls = []) {
        let str = text;
        urls.reverse().forEach((url) => {
            str = str.substr(0, url.indices[0]) + `<a href="${url.url}" target="_blank" >${url.display_url}</a>` + str.substr(url.indices[1]);
        });
        return str;
    }

    returnHomeTimeline(timeline) {
        if (timeline.length > 0) {
            return timeline.map((item, index) => {
                return (
                    <li className="List__item" key={index}>
                        <dl>
                            <dt>
                                <span className="List__name">{item.user.name}</span>
                                <span className="List__screenName ml5px">@{item.user.screen_name}</span>
                            </dt>
                            <dd dangerouslySetInnerHTML={{__html : this.returnLinkedText(item.text, item.entities.urls)}}></dd>
                        </dl>
                    </li>    
                );
            });
        }
    }

    render() {
        if (this.props.data.gettingHomeTimeline) {
            return (
                <div className="Loading" />
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
