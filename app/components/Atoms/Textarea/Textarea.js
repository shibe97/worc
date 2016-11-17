import React from 'react';
import styles from './textarea.css';

export default ({ value='', inputUpdate }) => (
  <textarea
    className={styles.textarea}
    placeholder="What's happening?"
    value={value}
    onChange={(e) => inputUpdate(e.target.value)}
  />
);
