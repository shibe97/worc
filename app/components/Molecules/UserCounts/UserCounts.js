import React from 'react';
import { Link } from 'react-router-dom';
import UserCount from '../../Atoms/UserCount/UserCount';
import styles from './userCounts.css';

export default ({ idStr = '', statusesCount = '', friendsCount = '', followersCount = '', closeModal }) => (
  <ul className={styles.userCounts}>
    <UserCount title="tweets">
      <Link to={`userTimeline/${idStr}`} onClick={() => closeModal()}>
        {statusesCount.toLocaleString()}
      </Link>
    </UserCount>
    <UserCount title="friends">
      {friendsCount.toLocaleString()}
    </UserCount>
    <UserCount title="followers">
      {followersCount.toLocaleString()}
    </UserCount>
  </ul>
);
