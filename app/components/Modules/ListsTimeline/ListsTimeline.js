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
        <p className={styles.current}>list : {this.props.match.params.listName}</p>
        <Timeline
          gettingTimeline={this.props.gettingTimeline}
          timeline={this.props.timeline}
          user={this.props.user}
          requestGetTimeline={this.props.requestGetTimeline}
          requestGetUsersShow={this.props.requestGetUsersShow}
          requestGetSearchTweets={this.props.requestGetSearchTweets}
          requestGetUsersShow={this.props.requestGetUsersShow}
        />
      </div>
    );
  }
}
