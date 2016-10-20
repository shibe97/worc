import React from 'react';
import styles from './screenName.css';

export default ({ children }) => (
  <span>
    <span className={styles.screenName}>{ children }</span>
  </span>
);
