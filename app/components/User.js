import React, { Component } from 'react';
import Name from './Atoms/Name';
import ScreenName from './Atoms/ScreenName';
import Modal from 'react-awesome-modal';

export default class User extends Component {
  closeUserModal() {
    this.props.closeUserModal();
  }

  render() {
    if (!this.props.user.user.profile_background_image_url_https) {
      return <div />;
    }
    const style = {
      background : `url(${this.props.user.user.profile_background_image_url_https}) repeat center -40px`
    };
    return (
      <Modal visible={this.props.user.modal} width="340" height="340" effect="fadeInDown" onClickAway={() => this.closeUserModal()}>
        <div className="User" style={style}>
          <div className="User__whiteArea">
            <div className="User__info">
              <img className="User__img" src={this.props.user.user.profile_image_url_https} alt="profile_image" />
              <Name>{this.props.user.user.name}</Name>
              <br />
              <ScreenName>@{this.props.user.user.screen_name}</ScreenName>
            </div>
            <p className="User__description">{this.props.user.user.description}</p>
            <ul className="User__count">
              <li className="User__countItem">
                <dl>
                  <dd className="User__countValue">{this.props.user.user.statuses_count}</dd>
                  <dt className="User__countKey">tweets</dt>
                </dl>
              </li>
              <li className="User__countItem">
                <dl>
                  <dd className="User__countValue">{this.props.user.user.friends_count}</dd>
                  <dt className="User__countKey">friends</dt>
                </dl>
              </li>
              <li className="User__countItem">
                <dl>
                  <dd className="User__countValue">{this.props.user.user.followers_count}</dd>
                  <dt className="User__countKey">followers</dt>
                </dl>
              </li>
            </ul>
          </div>
        </div>
      </Modal>
    );
  }
}
