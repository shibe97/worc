import React, { Component } from 'react';
import Timeline from '../Timeline/Timeline';
import styles from './listsTimeline.css';

export default class ListsTimeline extends Component {
  componentWillMount() {
    this.props.requestStreamSiteFollow();
  }

  render() {
    return (
      <div>
        <p className={styles.current}>list : {this.props.params.listName}</p>
        <Timeline
          gettingTimeline={this.props.gettingTimeline}
          timeline={this.props.timeline}
          user={this.props.user}
          requestGetTimeline={this.props.requestGetTimeline}
          requestGetSearchTweets={this.props.requestGetSearchTweets}
        />
      </div>
    );
  }
}
