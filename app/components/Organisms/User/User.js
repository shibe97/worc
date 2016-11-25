import React from 'react';
import UserInfo from '../../Molecules/UserInfo/UserInfo';
import UserCounts from '../../Molecules/UserCounts/UserCounts';
import styles from './user.css';

export default ({
  imageUrl = '',
  backgroundImageUrl = '',
  idStr = '',
  name = '',
  screenName = '',
  description = '',
  statusesCount = '',
  friendsCount = '',
  followersCount = '',
  closeModal
}) => {
  const style = {
    background: `url(${backgroundImageUrl}) repeat center -40px`
  };
  return (
    <div className={styles.user} style={style}>
      <div className={styles.whiteArea}>
        <UserInfo
          idStr={idStr}
          url={imageUrl}
          name={name}
          screenName={screenName}
          closeModal={closeModal}
        />
        <p className={styles.description}>{description}</p>
        <UserCounts
          idStr={idStr}
          statusesCount={statusesCount}
          friendsCount={friendsCount}
          followersCount={followersCount}
          closeModal={closeModal}
        />
      </div>
    </div>
  );
};
