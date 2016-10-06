import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navigation extends Component {
  render() {
    return (
      <ul className="Navigation">
        <li className="Navigation__item Navigation__item--home"><Link to="homeTimeline" onClick={() => this.props.resetTimeline()}>ホーム</Link></li>
        <li className="Navigation__item Navigation__item--mentions"><Link to="mentionsTimeline" onClick={() => this.props.resetTimeline()}>リプライ</Link></li>
        <li className="Navigation__item Navigation__item--lists"><Link to="lists" onClick={() => this.props.resetTimeline()}>リスト</Link></li>
      </ul>
    );
  }
}
