import React from 'react';
import styles from './text.css';

const returnLinkedText = (text, entities = {}) => {
  let str = text;
  const hashtags = entities.hashtags.map(hashtag => ({
    ...hashtag,
    type: 'hashtags'
  }));
  const urls = entities.urls.map(url => ({
    ...url,
    type: 'urls'
  }));
  const userMentions = entities.user_mentions.map(userMention => ({
    ...userMention,
    type: 'user_mentions'
  }));
  const newEntities = [
    ...hashtags,
    ...urls,
    ...userMentions
  ];
  const sortedEntities = newEntities.length > 0 ? newEntities.sort((a, b) => b.indices[0] - a.indices[0]) : [];

  sortedEntities.forEach((entity) => {
    switch (entity.type) {
      case 'hashtags':
        break;
      case 'urls':
        str = `${str.substr(0, entity.indices[0])}<a href="${entity.url}" target="_blank" >${entity.display_url}</a>${str.substr(entity.indices[1])}`;
        break;
      case 'user_mentions':
        str = `${str.substr(0, entity.indices[0])}<a href="javascript:void(0);" >@${entity.screen_name}</a>${str.substr(entity.indices[1])}`;
        break;
      default:
        break;
    }
  });

  return str;
};

export default ({ tweet = {}, setUser = null }) => (
  <p
    className={styles.text}
    dangerouslySetInnerHTML={{ __html: returnLinkedText(tweet.text, tweet.entities, setUser) }}
  />
);
