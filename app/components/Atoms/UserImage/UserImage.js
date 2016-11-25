import React from 'react';
import styles from './userImage.css';

export default ({ url = '' }) => (
  <img className={styles.userImage} src={url} alt="profile" />
);
