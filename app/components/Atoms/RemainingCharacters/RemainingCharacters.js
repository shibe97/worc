import React from 'react';
import styles from './remainingCharacters.css';

export default ({ remainingCharacters }) => (
  <span className={remainingCharacters < 0 ? `${styles.overLength} mr15px` : 'mr15px'}>{remainingCharacters}</span>
);
