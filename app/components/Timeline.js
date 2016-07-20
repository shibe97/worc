import React, { Component } from 'react';
import Tweet from './Tweet';

export default class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            retweetModal : false
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return JSON.stringify(this.props) !== JSON.stringify(nextProps);
    }

    returnTimeline(timeline) {
        if (timeline.length > 0) {
            return timeline.map((item, index) => {
                return <Tweet tweet={item} key={index} dispatch={this.props.dispatch} />;
            });
        }
    }

    render() {
        if (this.props.gettingTimeline) {
            return (
                <div className="List">
                    <div className="Loading" />
                </div>
            );
        }
        return (
            <ul className="List">
                {this.returnTimeline(this.props.timeline)}
            </ul>
        );
    }
}
