export const favoriteCreate = tweet => ({
  ...tweet,
  favorite_count: tweet.favorite_count + 1,
  favorited: true
});

export const favoritesCreate = (timeline, tweetId) => timeline.map((tweet) => {
  if (tweet.retweeted_status && tweet.retweeted_status.id_str === tweetId) {
    return {
      ...tweet,
      retweeted_status: favoriteCreate(tweet.retweeted_status)
    };
  } else if (tweet.id_str === tweetId) {
    return favoriteCreate(tweet);
  }
  return tweet;
});

export const favoriteDestroy = tweet => ({
  ...tweet,
  favorite_count: tweet.favorite_count - 1,
  favorited: false
});

export const favoritesDestroy = (timeline, tweetId) => timeline.map((tweet) => {
  if (tweet.retweeted_status && tweet.retweeted_status.id_str === tweetId) {
    return {
      ...tweet,
      retweeted_status: favoriteDestroy(tweet.retweeted_status)
    };
  } else if (tweet.id_str === tweetId) {
    return favoriteDestroy(tweet);
  }
  return tweet;
});
