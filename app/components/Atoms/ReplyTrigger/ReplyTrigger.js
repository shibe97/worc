import React from 'react';
import styles from './replyTrigger.css';

export default ({ tweet, openReplyModal }) => (
  <span>
    <a className={tweet.retweeted ? styles.isActioned : ''} href="javascript:void(0);" onClick={tweet.retweeted ? false : () => openReplyModal(tweet)}>
      <svg height="12px" version="1.1" viewBox="0 0 21.2 19.6">
        <path d="M10.6,2.6C4.8,2.6,0.1,5.9,0.1,9.9c0,1.7,0.9,3.3,2.3,4.6v5.1L7,16.8c1.1,0.3,2.3,0.4,3.6,0.4c5.8,0,10.6-3.3,10.6-7.3 C21.2,5.9,16.5,2.6,10.6,2.6z" />
      </svg>
    </a>
  </span>
);
