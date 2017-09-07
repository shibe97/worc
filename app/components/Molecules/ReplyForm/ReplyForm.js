import React from 'react';
import { Shortcuts } from 'react-shortcuts';
import Textarea from '../../Atoms/Textarea/Textarea';
import RemainingCharacters from '../../Atoms/RemainingCharacters/RemainingCharacters';
import Button from '../../Atoms/Button/Button';
import styles from './replyForm.css';

function readyToReply(data) {
  return (
    !data.postingReply &&
    data.remainingCharacters >= 0 &&
    data.remainingCharacters < 140
  );
}

export default ({ data = {}, inReplyToStatusId, inputReply, requestPostReply, closeModal }) => (
  <form className={styles.postForm}>
    <Shortcuts
      name="POSTFORM" handler={(action) => {
        switch (action) {
          case 'POST':
            if (readyToReply(data)) {
              requestPostReply(data.reply);
            }
            break;
          default:
            break;
        }
      }}
    >
      <Textarea value={data.reply} inputUpdate={inputReply} />
    </Shortcuts>
    <div className={styles.actions}>
      <RemainingCharacters remainingCharacters={data.remainingCharacters} />
      <span className={styles.button}>
        <Button
          type="normal"
          value="Post"
          onClick={() => requestPostReply({ status: data.reply, in_reply_to_status_id: inReplyToStatusId }, closeModal)}
          disabled={!readyToReply(data)}
          title={process.platform === 'darwin' ? 'Cmd+Enter' : 'Ctrl+Enter'}
        />
      </span>
    </div>
  </form>
);
