import React from 'react';
import { Link } from 'react-router';
import styles from './navigationItem.css';

export default ({ current, to, onClick, children, itemClass }) => {
  if (current === to) {
    return (
      <li className={`${styles.item} ${styles.isSelected} ${styles[itemClass]}`}>
        {children}
      </li>
    );
  } else if (current.includes(to)) {
    return (
      <li className={`${styles.item} ${styles.isSelected} ${styles[itemClass]}`}>
        <Link to={to} onClick={onClick}>{children}</Link>
      </li>
    );
  }
  return (
    <li className={`${styles.item} ${styles[itemClass]}`}>
      <Link to={to} onClick={onClick}>{children}</Link>
    </li>
  );
};
