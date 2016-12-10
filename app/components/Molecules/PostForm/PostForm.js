import React from 'react';
import { Shortcuts } from 'react-shortcuts';
import Textarea from '../../Atoms/Textarea/Textarea';
import RemainingCharacters from '../../Atoms/RemainingCharacters/RemainingCharacters';
import Button from '../../Atoms/Button/Button';
import styles from './postForm.css';

function readyToPost(data) {
  return (
    !data.postingUpdate &&
    data.remainingCharacters >= 0 &&
    data.remainingCharacters < 140
  );
}

export default ({ data = {}, inputUpdate, requestPostUpdate }) => (
  <form className={styles.postForm}>
    <Shortcuts
      name="POSTFORM" handler={(action) => {
        switch (action) {
          case 'POST':
            if (readyToPost(data)) {
              requestPostUpdate(data.update);
            }
            break;
          default:
            break;
        }
      }}
    >
      <Textarea value={data.update} inputUpdate={inputUpdate} />
    </Shortcuts>
    <div className={styles.actions}>
      <RemainingCharacters remainingCharacters={data.remainingCharacters} />
      <span className={styles.button}>
        <Button
          type="normal"
          value="Post"
          onClick={() => requestPostUpdate(data.update)}
          disabled={!readyToPost(data)}
        />
      </span>
    </div>
  </form>
);
