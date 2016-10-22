import React from 'react';
import RetweetTrigger from '../../../containers/Atoms/RetweetTrigger';
import FavoriteTrigger from '../../../containers/Atoms/FavoriteTrigger';
import styles from './triggers.css';

export default ({ tweet = {} }) => (
  <ul>
    <li className={styles.action}>
      <RetweetTrigger
        id_str={tweet.id_str}
        retweeted={tweet.retweeted}
        retweet_count={tweet.retweet_count}
      />
    </li>
    <li className={styles.action}>
      <FavoriteTrigger
        id_str={tweet.id_str}
        favorited={tweet.favorited}
        favorite_count={tweet.favorite_count}
      />
    </li>
  </ul>
);
