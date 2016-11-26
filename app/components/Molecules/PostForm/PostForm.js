import React from 'react';
import Textarea from '../../Atoms/Textarea/Textarea';
import RemainingCharacters from '../../Atoms/RemainingCharacters/RemainingCharacters';
import Button from '../../Atoms/Button/Button';
import styles from './postForm.css';

export default ({ data = {}, inputUpdate, requestPostUpdate }) => (
  <form className={styles.postForm}>
    <Textarea value={data.update} inputUpdate={inputUpdate} />
    <div className={styles.actions}>
      <RemainingCharacters remainingCharacters={data.remainingCharacters} />
      <span className={styles.button}>
        <Button
          type="normal"
          value="Post"
          onClick={() => requestPostUpdate(data.update)}
          disabled={data.postingUpdate || data.remainingCharacters === 140 || data.remainingCharacters < 0}
        />
      </span>
    </div>
  </form>
);
