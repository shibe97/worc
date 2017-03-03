import React from 'react';
import Item from '../../Atoms/NavigationItem/NavigationItem';
import styles from './navigation.css';

export default ({ pathname, resetTimeline }) => (
  <ul className={styles.navigation}>
    <Item current={pathname} to="/homeTimeline" onClick={() => resetTimeline()} itemClass="home">home</Item>
    <Item current={pathname} to="/mentionsTimeline" onClick={() => resetTimeline()} itemClass="mentions">mentions</Item>
    <Item current={pathname} to="/lists" onClick={() => resetTimeline()} itemClass="lists">lists</Item>
    <Item current={pathname} to="/searchTimeline" onClick={() => resetTimeline()} itemClass="search">search</Item>
    <a href="https://github.com/shibe97/worc" target="GitHub" className={styles.github}>GitHub</a>
  </ul>
);
