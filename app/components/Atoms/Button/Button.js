import React from 'react';
import styles from './button.css';

export default ({ disabled = false, value, disabledValue, onClick }) => {
  if (disabled) {
    return (
      <input className={`${styles.button} ${styles.normal} ${styles.disabled}`} type="button" value={disabledValue ? disabledValue : value} onClick={() => onClick()} />
    );
  }
  return (
    <input className={`${styles.button} ${styles.normal}`} type="button" value={value} onClick={() => onClick()} />
  );
};
