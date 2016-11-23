import React from 'react';
import styles from './createdAt.css';

export default ({ children }) => {
  const getTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
    return `${hours}:${minutes}`;
  };

  return (
    <span className={styles.createdAt}>{ getTime(new Date(children)) }</span>
  );
};
