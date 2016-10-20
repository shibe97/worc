import React from 'react';

export default ({ id_str, retweeted, retweet_count, openRetweetModal }) => (
  <span>
    <a className={retweeted ? 'isActioned' : ''} href="javascript:void(0);" onClick={retweeted ? false : () => openRetweetModal(id_str)}>
      <svg height="10px" version="1.1" viewBox="0 0 100 60"><path d="M24.9,46V19.9H35L17.5,0L0,19.9h10.1V50c0,5.523,4.476,10,10,10H65L52.195,46H24.9z M89.9,40.1V10c0-5.523-4.477-10-10-10 H35l12.804,14h27.295v26.1H65L82.5,60L100,40.1H89.9z"/></svg>
    </a>
    <a href="javascript:void(0);" className="Tweet__actionCount">
      {retweet_count}
    </a>
  </span>
);
