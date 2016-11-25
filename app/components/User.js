import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import UserInfo from './Molecules/UserInfo/UserInfo';
import UserCounts from './Molecules/UserCounts/UserCounts';
import User from './Organisms/User/User';

export default class User extends Component {
  render() {
    return (
      <Modal visible={this.props.user.modal} width="340" height="340" effect="fadeInDown" onClickAway={() => this.props.closeUserModal()}>
        {
          this.props.user.user.profile_background_image_url_https &&
            <User
              idStr={this.props.user.user.id_str}
              url={this.props.user.user.profile_image_url_https}
              name={this.props.user.user.name}
              screenName={this.props.user.user.screen_name}
              description={this.props.user.user.description}
              statusesCount={this.props.user.user.statuses_count}
              friendsCount={this.props.user.user.friends_count}
              followersCount={this.props.user.user.followers_count}
              closeModal={this.props.closeUserModal}
            />
        }
      </Modal>
    );
  }
}
