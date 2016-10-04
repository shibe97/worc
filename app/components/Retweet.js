import React, { Component } from 'react';
import Name from './Atoms/Name';
import ScreenName from './Atoms/ScreenName';
import Modal from 'react-awesome-modal';

export default class Retweet extends Component {
  postRetweet() {
    this.props.closeRetweetModal();
    this.props.requestPostRetweet(this.props.tweetId);
  }

  render() {
    return (
      <Modal visible={this.props.modal} width="340" height="120" effect="fadeInDown" onClickAway={() => this.props.closeRetweetModal()}>
        <div className="Modal">
          <p className="Modal__title">Are you sure you wanna retweet?</p>
          <div className="Modal__actions mt20px">
            <input className="Button Button__submit" type="button" value="retweet" onClick={() => this.postRetweet()} />
            <a className="ml20px" href="javascript:void(0);" onClick={() => this.props.closeRetweetModal()}>cancel</a>
          </div>
        </div>
      </Modal>
    );
  }
}
