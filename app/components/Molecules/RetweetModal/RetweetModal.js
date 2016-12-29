import React from 'react';
import Modal from 'react-awesome-modal';
import RetweetActions from '../../Atoms/RetweetActions/RetweetActions';
import Meta from '../../Molecules/Meta/Meta';
import Text from '../../Atoms/Text/Text';
import styles from './retweetModal.css';

function putTweetIfValid(tweet) {
  if (tweet.id_str) {
    return (
      <dl className={styles.retweetWrapper}>
        <dt>
          <Meta tweet={tweet} />
        </dt>
        <dd>
          <Text tweet={tweet} />
        </dd>
      </dl>
    );
  }
  return (
    <p>No Display</p>
  );
}

export default props => (
  <Modal visible={props.modal} width="340" effect="fadeInDown" onClickAway={() => props.closeRetweetModal()}>
    <div className={styles.modal}>
      {putTweetIfValid(props.tweet)}
      <p className={styles.title}>Are you sure you wanna retweet this?</p>
      <div className={styles.actions}>
        <RetweetActions {...props} />
      </div>
    </div>
  </Modal>
);
