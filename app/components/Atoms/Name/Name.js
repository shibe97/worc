import React from 'react';
import styles from './name.css';

export default ({ children }) => (
  <span className={styles.name}>{ children }</span>
);
