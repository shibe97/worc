import React from 'react';
import Name from '../../Atoms/Name/Name';
import ScreenName from '../../Atoms/ScreenName/ScreenName';
import CreatedAt from '../../Atoms/CreatedAt/CreatedAt';
import styles from './meta.css';

export default ({ tweet = {}, setUser }) => (
  <div className={styles.meta}>
    <Name user={tweet.user}><a href="javascript:void(0);" onClick={() => setUser(tweet.user)}>{tweet.user.name}</a></Name>
    <span className="ml5px"><ScreenName>@{tweet.user.screen_name}</ScreenName></span>
    <span className={styles.createdAt}><CreatedAt>{tweet.created_at}</CreatedAt></span>
  </div>
);
