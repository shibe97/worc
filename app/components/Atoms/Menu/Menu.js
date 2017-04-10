import React from 'react';
import styles from './menu.css';

export default ({ router }) => (
  <ul className={styles.menu}>
    <li><a href="javascript:void(0);" className={styles.back} onClick={() => router.goBack()} title="go back">go back</a></li>
    <li><a href="javascript:void(0);" className={styles.forward} onClick={() => router.goForward()} title="go forward">go forward</a></li>
  </ul>
  );
