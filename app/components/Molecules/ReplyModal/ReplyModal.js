import React from 'react';
import Modal from 'react-awesome-modal';
import Meta from '../../Molecules/Meta/Meta';
import Text from '../../Atoms/Text/Text';
import ReplyForm from '../../../containers/Molecules/ReplyForm';
import styles from './replyModal.css';

function putTweetIfValid(tweet) {
  if (tweet.id_str) {
    return (
      <dl className={styles.replyWrapper}>
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
  <Modal visible={props.modal} width="340" effect="fadeInDown" onClickAway={() => props.closeReplyModal()}>
    <div className={styles.modal}>
      {putTweetIfValid(props.tweet)}
    </div>
    <p className={styles.replyToUser}>Replying to @{props.tweet.user && props.tweet.user.screen_name}</p>
    <ReplyForm inReplyToStatusId={props.tweet.id_str} />
  </Modal>
);
