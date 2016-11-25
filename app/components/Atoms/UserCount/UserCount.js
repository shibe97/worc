import React from 'react';
import styles from './userCount.css';

export default ({ children, title }) => (
  <li className={styles.userCount}>
    <dl>
      <dd className={styles.value}>{children}</dd>
      <dt className={styles.key}>{title}</dt>
    </dl>
  </li>
);
