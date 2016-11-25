import React, { Component } from 'react';
import { Link } from 'react-router';
import Modal from 'react-awesome-modal';
import Name from './Atoms/Name/Name';
import ScreenName from './Atoms/ScreenName/ScreenName';
import UserCounts from './Molecules/UserCounts/UserCounts';

export default class User extends Component {
  render() {
    const style = {
      background: `url(${this.props.user.user.profile_background_image_url_https}) repeat center -40px`
    };
    return (
      <Modal visible={this.props.user.modal} width="340" height="340" effect="fadeInDown" onClickAway={() => this.props.closeUserModal()}>
        {
          this.props.user.user.profile_background_image_url_https &&
            <div className="User" style={style}>
              <div className="User__whiteArea">
                <div className="User__info">
                  <img className="User__img" src={this.props.user.user.profile_image_url_https} alt="profile" />
                  <Link to={`userTimeline/${this.props.user.user.id_str}`} onClick={() => this.props.closeUserModal()}><Name>{this.props.user.user.name}</Name></Link>
                  <br />
                  <ScreenName>@{this.props.user.user.screen_name}</ScreenName>
                </div>
                <p className="User__description">{this.props.user.user.description}</p>
                <UserCounts
                  idStr={this.props.user.user.id_str}
                  statusesCount={this.props.user.user.statuses_count}
                  friendsCount={this.props.user.user.friends_count}
                  followersCount={this.props.user.user.followers_count}
                  closeModal={this.props.closeUserModal}
                />
              </div>
            </div>
        }
      </Modal>
    );
  }
}
