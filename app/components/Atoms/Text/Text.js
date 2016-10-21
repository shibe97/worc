import React from 'react';
import styles from './text.css';

const returnLinkedText = (text, urls = []) => {
  let str = text;
  urls.reverse().forEach((url) => {
    str = str.substr(0, url.indices[0]) + `<a href="${url.url}" target="_blank" >${url.display_url}</a>` + str.substr(url.indices[1]);
  });
  return str;
}

export default ({ tweet = {} }) => (
  <p
    className={styles.text}
    dangerouslySetInnerHTML={{__html : returnLinkedText(tweet.text, tweet.entities && tweet.entities.urls)}}
  />
);
