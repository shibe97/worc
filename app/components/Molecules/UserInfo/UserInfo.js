import React from 'react';
import { Link } from 'react-router';
import UserImage from '../../Atoms/UserImage/UserImage';
import Name from '../../Atoms/Name/Name';
import ScreenName from '../../Atoms/ScreenName/ScreenName';
import styles from './userInfo.css';

export default ({ url = '', idStr = '', name = '', screenName = '', closeModal }) => (
  <div className={styles.userInfo}>
    <span className={styles.image}>
      <UserImage url={url} />
    </span>
    <Link to={`userTimeline/${idStr}`} onClick={() => closeModal()}>
      <Name>{name}</Name>
    </Link>
    <br />
    <ScreenName>@{screenName}</ScreenName>
  </div>
);
