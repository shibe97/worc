import React from 'react';
import Name from '../../Atoms/Name/Name';
import ScreenName from '../../Atoms/ScreenName/ScreenName';
import CreatedAt from '../../Atoms/CreatedAt/CreatedAt';
import styles from './meta.css';

function userNameWithLinkIfNeeded(tweet, setUser) {
  if (setUser) {
    return (
      <a href="javascript:void(0);" onClick={() => setUser(tweet.user)}>
        {tweet.user.name}
      </a>);
  }
  return (
    <p>
      {tweet.user.name}
    </p>
  );
}

export default ({ tweet = {}, setUser = null }) => (
  <div className={styles.meta}>
    <Name user={tweet.user}>
      {userNameWithLinkIfNeeded(tweet, setUser)}
    </Name>
    <span className={styles.screenName}><ScreenName>@{tweet.user.screen_name}</ScreenName></span>
    <span className={styles.createdAt}><CreatedAt>{tweet.created_at}</CreatedAt></span>
  </div>
);
