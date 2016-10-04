import React, { Component } from 'react';
import Tweet from './Tweet';
import User from '../containers/User';
import Retweet from '../containers/Retweet';
import Name from './Atoms/Name';
import ScreenName from './Atoms/ScreenName';
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

  componentDidMount() {
    if (this.props.requestStreamSite) {
      this.props.requestStreamSite();
    }
    this.props.requestGetTimeline();
  }

  postFavorites(tweetId, favorited) {
    if (favorited) {
      this.props.requestPostFavoritesDestroy(tweetId);
    } else {
      this.props.requestPostFavoritesCreate(tweetId);
    }
  }

  setUser(user) {
    this.props.setUser(user);
  }

  returnTimeline(timeline) {
    if (timeline.length > 0) {
      return timeline.map((item, index) => {
        return (
          <Tweet
            tweet={item}
            key={index}
            postFavorites={this.postFavorites.bind(this)}
            postRetweet={this.props.openRetweetModal}
            setUser={this.setUser.bind(this)}
          />
        );
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
