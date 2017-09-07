import React from 'react';
import ReplyTrigger from '../../../containers/Atoms/ReplyTrigger';
import RetweetTrigger from '../../../containers/Atoms/RetweetTrigger';
import FavoriteTrigger from '../../../containers/Atoms/FavoriteTrigger';
import styles from './triggers.css';

export default ({ tweet = {} }) => (
  <ul>
    <li className={styles.action}>
      <ReplyTrigger tweet={tweet} />
    </li>
    <li className={styles.action}>
      <RetweetTrigger tweet={tweet} />
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
