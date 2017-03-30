import React, { Component } from 'react';
import Timeline from '../Timeline/Timeline';
import Button from '../../Atoms/Button/Button';
import styles from './searchTimeline.css';

export default class SearchTimeline extends Component {

  componentWillMount() {
    // this.props.requestStreamSiteTrack(this.props.query);
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.requestGetTimeline();
    }
  }

  inputQuery(e, value) {
    this.props.inputQuery(value);
  }

  requestGetTimeline() {
    if (this.props.query !== '') {
      this.props.requestGetTimeline(this.props.query);
    }
  }

  render() {
    return (
      <div>
        <div className={styles.searchArea}>
          <input className={styles.inputText} type="text" value={this.props.query} onChange={e => this.inputQuery(e, e.target.value)} onKeyPress={e => this.handleKeyPress(e)} />
          <Button
            type="normal"
            value="Search"
            onClick={() => this.requestGetTimeline()}
            disabled={this.props.gettingTimeline}
          />
        </div>
        <Timeline
          gettingTimeline={this.props.gettingTimeline}
          timeline={this.props.timeline}
          user={this.props.user}
          requestGetTimeline={() => this.requestGetTimeline()}
          requestGetUsersShow={this.props.requestGetUsersShow}
          requestGetSearchTweets={this.props.requestGetSearchTweets}
        />
      </div>
    );
  }
}
