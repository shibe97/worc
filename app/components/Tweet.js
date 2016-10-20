import React, { Component } from 'react';
import Name from './Atoms/Name/Name';
import ScreenName from './Atoms/ScreenName/ScreenName';
import CreatedAt from './Atoms/CreatedAt/CreatedAt';
import RetweetTrigger from '../containers/Atoms/RetweetTrigger';
import FavoriteTrigger from '../containers/Atoms/FavoriteTrigger';

export default class Tweet extends Component {
  returnLinkedText(text, urls = []) {
    let str = text;
    urls.reverse().forEach((url) => {
      str = str.substr(0, url.indices[0]) + `<a href="${url.url}" target="_blank" >${url.display_url}</a>` + str.substr(url.indices[1]);
    });
    return str;
  }

  render() {
    const { tweet } = this.props;
    if (!tweet.user) {
      return <li />
    }
    if (tweet.retweeted_status) {
      return (
        <li className="List__item">
          <dl>
            <dt className="Tweet__meta">
              <p className="Tweet__retweetedBy">
                <svg height="8px" version="1.1" viewBox="0 0 100 60"><path d="M24.9,46V19.9H35L17.5,0L0,19.9h10.1V50c0,5.523,4.476,10,10,10H65L52.195,46H24.9z M89.9,40.1V10c0-5.523-4.477-10-10-10 H35l12.804,14h27.295v26.1H65L82.5,60L100,40.1H89.9z"/></svg>
                <span className="ml5px">retweeted by {tweet.user.name}</span>
              </p>
              <Name><a href="javascript:void(0);" onClick={() => this.props.setUser(tweet.retweeted_status.user)}>{tweet.retweeted_status.user.name}</a></Name>
              <span className="ml5px"><ScreenName>@{tweet.retweeted_status.user.screen_name}</ScreenName></span>
              <span className="Tweet__createdAt"><CreatedAt>{tweet.retweeted_status.created_at}</CreatedAt></span>
            </dt>
            <dd className="Tweet__text" dangerouslySetInnerHTML={{__html : this.returnLinkedText(tweet.retweeted_status.text, tweet.retweeted_status.entities && tweet.retweeted_status.entities.urls)}}></dd>
            <dd className="Tweet__actions">
              <ul>
                <li className="Tweet__action">
                  <RetweetTrigger
                    id_str={tweet.retweeted_status.id_str}
                    retweeted={tweet.retweeted_status.retweeted}
                    retweet_count={tweet.retweeted_status.retweet_count}
                  />
                </li>
                <li className="Tweet__action">
                  <FavoriteTrigger
                    id_str={tweet.retweeted_status.id_str}
                    favorited={tweet.retweeted_status.favorited}
                    favorite_count={tweet.retweeted_status.favorite_count}
                  />
                </li>
              </ul>
            </dd>
          </dl>
        </li>
      );
    }
    return (
      <li className="List__item">
        <dl>
          <dt className="Tweet__meta">
            <Name><a href="javascript:void(0);" onClick={() => this.props.setUser(tweet.user)}>{tweet.user.name}</a></Name>
            <span className="ml5px"><ScreenName>@{tweet.user.screen_name}</ScreenName></span>
            <span className="Tweet__createdAt"><CreatedAt>{tweet.created_at}</CreatedAt></span>
          </dt>
          <dd className="Tweet__text" dangerouslySetInnerHTML={{__html : this.returnLinkedText(tweet.text, tweet.entities && tweet.entities.urls)}}></dd>
          <dd className="Tweet__actions">
            <ul>
              <li className="Tweet__action">
                <RetweetTrigger
                  id_str={tweet.id_str}
                  retweeted={tweet.retweeted}
                  retweet_count={tweet.retweet_count}
                />
              </li>
              <li className="Tweet__action">
                <FavoriteTrigger
                  id_str={tweet.id_str}
                  favorited={tweet.favorited}
                  favorite_count={tweet.favorite_count}
                />
              </li>
            </ul>
          </dd>
        </dl>
      </li>
    );
  }
}
