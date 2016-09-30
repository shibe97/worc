import React, { Component } from 'react';
import Tweet from './Tweet';
import Name from './Atoms/Name';
import ScreenName from './Atoms/ScreenName';
import Modal from 'react-awesome-modal';

export default class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userModal    : false,
      retweetModal : false,
      tweetId      : ''
    };
  }

  componentDidMount() {
    if (this.props.requestStreamSite) {
      this.props.requestStreamSite();
    }
    this.props.requestGetTimeline();
  }

  postFavorites(tweetId, favorited) {
    if (favorited) {
      this.props.requestPostFavoritesDestroy(tweetId);
    } else {
      this.props.requestPostFavoritesCreate(tweetId);
    }
  }

  postRetweet() {
    this.closeRetweetModal();
    this.props.requestPostRetweet(this.state.tweetId);
  }

  popupRetweetModal(tweetId) {
    this.setState({
      retweetModal : true,
      tweetId      : tweetId
    });
  }

  closeRetweetModal() {
    this.setState({
      retweetModal : false
    });
  }

  setUser(user) {
    this.props.setUser(user);
    this.setState({
      userModal : true
    });
  }

  returnTimeline(timeline) {
    if (timeline.length > 0) {
      return timeline.map((item, index) => {
        return (
          <Tweet
            tweet={item}
            key={index}
            postFavorites={this.postFavorites.bind(this)}
            postRetweet={this.popupRetweetModal.bind(this)}
            setUser={this.setUser.bind(this)}
          />
        );
      });
    }
  }

  closeUserModal() {
    this.setState({
      userModal : false
    });
  }

  render() {
    if (this.props.gettingTimeline) {
      return (
        <div className="List">
          <div className="Loading" />
        </div>
      );
    }
    const modalStyle = {
      background : `url(${this.props.user.profile_background_image_url_https}) repeat center -40px`
    };
    console.log(this.props.user);
    return (
      <div>
        <ul className="List">
          {this.returnTimeline(this.props.timeline)}
        </ul>
        <Modal visible={this.state.userModal} width="340" height="340" effect="fadeInDown" onClickAway={() => this.closeUserModal()}>
          <div className="User" style={modalStyle}>
            <div className="User__whiteArea">
              <div className="User__info">
                <img className="User__img" src={this.props.user.profile_image_url_https} alt="profile_image" />
                <Name>{this.props.user.name}</Name>
                <br />
                <ScreenName>@{this.props.user.screen_name}</ScreenName>
              </div>
              <p className="User__description">{this.props.user.description}</p>
              <ul>
                <li>tweets:{this.props.user.statuses_count}</li>
                <li>friends:{this.props.user.friends_count}</li>
                <li>followers:{this.props.user.followers_count}</li>
              </ul>
            </div>
          </div>
        </Modal>
        <Modal visible={this.state.retweetModal} width="340" height="120" effect="fadeInDown">
          <div className="Modal">
            <p className="Modal__title">Are you sure you wanna retweet?</p>
            <div className="Modal__actions mt20px">
              <input className="Button Button__submit" type="button" value="retweet" onClick={this.postRetweet.bind(this)} />
              <a className="ml20px" href="javascript:void(0);" onClick={this.closeRetweetModal.bind(this)}>cancel</a>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
