import React, { Component } from 'react';
import TweetWrapper from '../TweetWrapper/TweetWrapper';
import UserModal from '../../../containers/Modules/UserModal';
import RetweetModal from '../../../containers/Molecules/RetweetModal';
import Loading from '../../Atoms/Loading/Loading';
import styles from './timeline.css';

export default class Timeline extends Component {
  static returnTimeline(timeline) {
    if (timeline.length > 0) {
      return timeline.map((item, index) => (
        <TweetWrapper
          tweet={item}
          key={index}
        />
      ));
    }
    return <li />;
  }

  componentWillMount() {
    this.props.requestGetTimeline();
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.gettingTimeline !== nextProps.gettingTimeline) {
      return true;
    }
    if (this.props.timeline !== nextProps.timeline) {
      return true;
    }
    return false;
  }

  componentDidUpdate() {
    const userNameElms = document.getElementsByClassName('userName');
    const hashTagElms = document.getElementsByClassName('hashTag');
    Array.from(userNameElms).forEach((elm) => {
      elm.addEventListener('click', () => this.props.requestGetUsersShow(elm.getAttribute('data-id')));
    });
    Array.from(hashTagElms).forEach((elm) => {
      elm.addEventListener('click', () => this.props.requestGetSearchTweets(`#${elm.getAttribute('data-text')}`));
    });
  }

  render() {
    if (this.props.gettingTimeline) {
      return (
        <div className={styles.timeline}>
          <Loading />
        </div>
      );
    }
    return (
      <div>
        <ul className={styles.timeline}>
          {Timeline.returnTimeline(this.props.timeline)}
        </ul>
        <UserModal />
        <RetweetModal />
      </div>
    );
  }
}
