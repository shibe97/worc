import React, { Component } from 'react';
import Timeline from './Timeline';
import styles from './searchTimeline.css';

export default class SearchTimeline extends Component {
  componentWillMount() {
    // this.props.requestStreamSiteTrack(this.props.query);
  }

  inputQuery(value) {
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
          <input className={styles.inputText} type="text" value={this.props.query} onChange={(e) => this.inputQuery(e.target.value)} />
          <input className="Button Button__normal" type="button" value="Search" onClick={() => this.requestGetTimeline()} />
        </div>
        <Timeline
          gettingTimeline={this.props.gettingTimeline}
          timeline={this.props.timeline}
          user={this.props.user}
          requestGetTimeline={() => this.requestGetTimeline()}
        />
      </div>
    );
  }
}
