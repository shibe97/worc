import React, { Component } from 'react';
import { Link } from 'react-router';

const Item = ({ current, to, onClick, children, itemClass }) => {
  if (current === to) {
    return (
      <li className={`Navigation__item isSelected ${itemClass}`}>
        {children}
      </li>
    );
  }
  return (
    <li className={`Navigation__item ${itemClass}`}>
      <Link to={to} onClick={onClick}>{children}</Link>
    </li>
  );
};

export default class Navigation extends Component {
  render() {
    return (
      <ul className="Navigation">
        <Item current={this.props.pathname} to="/homeTimeline" onClick={() => this.props.resetTimeline()} itemClass="Navigation__item--home">ホーム</Item>
        <Item current={this.props.pathname} to="/mentionsTimeline" onClick={() => this.props.resetTimeline()} itemClass="Navigation__item--mentions">リプライ</Item>
        <Item current={this.props.pathname} to="/lists" onClick={() => this.props.resetTimeline()} itemClass="Navigation__item--lists">リスト</Item>
      </ul>
    );
  }
}
