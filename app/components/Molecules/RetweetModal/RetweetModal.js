import React from 'react';
import Modal from 'react-awesome-modal';
import RetweetActions from '../../Atoms/RetweetActions/RetweetActions';
import styles from './retweetModal.css';

export default props => (
  <Modal visible={props.modal} width="340" height="120" effect="fadeInDown" onClickAway={() => props.closeRetweetModal()}>
    <div className={styles.modal}>
      <p className={styles.title}>Are you sure you wanna retweet?</p>
      <RetweetActions {...props} />
    </div>
  </Modal>
);
