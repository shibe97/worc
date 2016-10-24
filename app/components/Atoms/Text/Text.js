import React from 'react';
import styles from './text.css';

const returnLinkedText = (text, entities = {}, extended_entities = {}) => {
  let str = text;
  const urls = extended_entities.media ? [...entities.urls, extended_entities.media[0]] : entities.urls;
  const sortedUrls = urls.sort((a, b) => b.indices[0] - a.indices[0]);
  sortedUrls.forEach((url) => {
    str = `${str.substr(0, url.indices[0])}<a href="${url.url}" target="_blank" >${url.display_url}</a>${str.substr(url.indices[1])}`;
  });
  return str;
}

export default ({ tweet = {} }) => (
  <p
    className={styles.text}
    dangerouslySetInnerHTML={{__html : returnLinkedText(tweet.text, tweet.entities, tweet.extended_entities)}}
  />
);
