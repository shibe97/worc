import React, { Component } from 'react';
import TweetWrapper from '../TweetWrapper/TweetWrapper';
import User from '../../../containers/User';
import Retweet from '../../../containers/Retweet';
import Loading from '../../Atoms/Loading/Loading';

export default class Timeline extends Component {
  static returnTimeline(timeline) {
    if (timeline.length > 0) {
      return timeline.map((item, index) => (
        <TweetWrapper
          tweet={item}
          key={index}
        />
      ));
    }
    return <li />;
  }

  componentWillMount() {
    this.props.requestGetTimeline();
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.gettingTimeline !== nextProps.gettingTimeline) {
      return true;
    }
    if (this.props.timeline !== nextProps.timeline) {
      return true;
    }
    return false;
  }

  render() {
    if (this.props.gettingTimeline) {
      return (
        <div className="List">
          <Loading />
        </div>
      );
    }
    return (
      <div>
        <ul className="List">
          {Timeline.returnTimeline(this.props.timeline)}
        </ul>
        <User />
        <Retweet />
      </div>
    );
  }
}
