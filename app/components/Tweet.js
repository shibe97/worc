import React, { Component } from 'react';
import Name from './Atoms/Name';
import ScreenName from './Atoms/ScreenName';
import CreatedAt from './Atoms/CreatedAt';

export default class Tweet extends Component {
  returnLinkedText(text, urls = []) {
    let str = text;
    urls.reverse().forEach((url) => {
      str = str.substr(0, url.indices[0]) + `<a href="${url.url}" target="_blank" >${url.display_url}</a>` + str.substr(url.indices[1]);
    });
    return str;
  }

  getTime(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
    return `${hours}:${minutes}`;
  }

  postFavorites(tweetId, favorited) {
    this.props.postFavorites(tweetId, favorited);
  }

  postRetweet(tweetId) {
    this.props.postRetweet(tweetId);
  }

  render() {
    const { tweet } = this.props;
    if (!tweet.user) {
      return <li />
    }
    return (
      <li className="List__item">
        <dl>
          <dt className="Tweet__meta">
            <Name>{tweet.user && tweet.user.name}</Name>
            <ScreenName>@{tweet.user && tweet.user.screen_name}</ScreenName>
            <CreatedAt>{this.getTime(new Date(tweet.created_at))}</CreatedAt>
          </dt>
          <dd className="Tweet__text" dangerouslySetInnerHTML={{__html : this.returnLinkedText(tweet.text, tweet.entities && tweet.entities.urls)}}></dd>
          <dd className="Tweet__actions">
            <ul>
              <li className="Tweet__action">
                <a className={tweet.favorited ? 'isActioned' : ''} href="javascript:void(0);" onClick={this.postFavorites.bind(this, tweet.id_str, tweet.favorited)}>
                  <svg height="12px" version="1.1" viewBox="0 0 23.218 20.776"><path d="M11.608,20.776c-22.647-12.354-6.268-27.713,0-17.369  C17.877-6.937,34.257,8.422,11.608,20.776z"/></svg>
                </a>
                <a href="javascript:void(0);" className="Tweet__actionCount">
                  {tweet.favorite_count}
                </a>
              </li>
              <li className="Tweet__action">
                <a className={tweet.retweeted ? 'isActioned' : ''} href="javascript:void(0);" onClick={tweet.retweeted ? false : this.postRetweet.bind(this, tweet.id_str)}>
                  <svg height="10px" version="1.1" viewBox="0 0 100 60"><path d="M24.9,46V19.9H35L17.5,0L0,19.9h10.1V50c0,5.523,4.476,10,10,10H65L52.195,46H24.9z M89.9,40.1V10c0-5.523-4.477-10-10-10 H35l12.804,14h27.295v26.1H65L82.5,60L100,40.1H89.9z"/></svg>
                </a>
                <a href="javascript:void(0);" className="Tweet__actionCount">
                  {tweet.retweet_count}
                </a>
              </li>
            </ul>
          </dd>
        </dl>
      </li>
    );
  }
}
