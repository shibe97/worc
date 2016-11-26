import React from 'react';
import Button from '../Button/Button';
import styles from './retweetActions.css';

export default ({ tweetId, requestPostRetweet, closeRetweetModal }) => {
  const postRetweet = () => {
    closeRetweetModal();
    requestPostRetweet(tweetId);
  };

  return (
    <div className={styles.retweetActions}>
      <Button type="submit" value="retweet" onClick={postRetweet} />
      <a className={styles.cancel} href="javascript:void(0);" onClick={() => closeRetweetModal()}>cancel</a>
    </div>
  );
};
