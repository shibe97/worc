import React from 'react';
import Modal from 'react-awesome-modal';
import User from '../../Organisms/User/User';

export default ({ user, closeUserModal }) => (
  <Modal visible={user.modal} width="340" height="340" effect="fadeInDown" onClickAway={() => closeUserModal()}>
    {
      user.user.profile_background_image_url_https &&
        <User
          idStr={user.user.id_str}
          imageUrl={user.user.profile_image_url_https}
          backgroundImageUrl={user.user.profile_background_image_url_https}
          name={user.user.name}
          screenName={user.user.screen_name}
          description={user.user.description}
          statusesCount={user.user.statuses_count}
          friendsCount={user.user.friends_count}
          followersCount={user.user.followers_count}
          closeModal={closeUserModal}
        />
    }
  </Modal>
);
