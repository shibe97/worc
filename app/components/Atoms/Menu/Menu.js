import React from 'react';
import styles from './menu.css';

export default ({ history }) => (
  <ul className={styles.menu}>
    <li><a href="javascript:void(0);" className={styles.back} onClick={() => history.goBack()} title="go back">go back</a></li>
    <li><a href="javascript:void(0);" className={styles.forward} onClick={() => history.goForward()} title="go forward">go forward</a></li>
  </ul>
);
