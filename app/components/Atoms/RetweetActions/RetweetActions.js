import React from 'react';
import Button from '../Button/Button';
import styles from './retweetActions.css';

export default ({ tweetId, requestPostRetweet, closeRetweetModal }) => {
  const postRetweet = () => {
    closeRetweetModal();
    requestPostRetweet(tweetId);
  };

  return (
    <div className={`${styles.retweetActions} mt20px`}>
      <Button type="submit" value="retweet" onClick={postRetweet} />
      <a className="ml20px" href="javascript:void(0);" onClick={() => closeRetweetModal()}>cancel</a>
    </div>
  );
};
