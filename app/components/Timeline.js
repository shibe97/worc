import React, { Component } from 'react';
import Tweet from './Tweet';
import User from '../containers/User';
import Retweet from '../containers/Retweet';
import Modal from 'react-awesome-modal';

export default class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetId : ''
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.gettingTimeline !== nextProps.gettingTimeline) {
      return true;
    }
    if (this.props.timeline !== nextProps.timeline) {
      return true;
    }
    return false;
  }

  componentWillMount() {
    if (this.props.requestStreamSite) {
      this.props.requestStreamSite();
    }
    this.props.requestGetTimeline();
  }

  returnTimeline(timeline) {
    if (timeline.length > 0) {
      return timeline.map((item, index) => (
        <Tweet
          tweet={item}
          key={index}
        />
      ));
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
      <div>
        <ul className="List">
          {this.returnTimeline(this.props.timeline)}
        </ul>
        <User />
        <Retweet />
      </div>
    );
  }
}
