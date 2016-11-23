export const retweetCreate = tweet => ({
  ...tweet,
  retweet_count: tweet.retweet_count + 1,
  retweeted: true
});

export const retweetsCreate = (timeline, tweetId) => timeline.map((tweet) => {
  if (tweet.retweeted_status && tweet.retweeted_status.id_str === tweetId) {
    return {
      ...tweet,
      retweeted_status: retweetCreate(tweet.retweeted_status)
    };
  } else if (tweet.id_str === tweetId) {
    return retweetCreate(tweet);
  }
  return tweet;
});

export const retweetDestroy = tweet => ({
  ...tweet,
  retweet_count: tweet.retweet_count - 1,
  retweeted: false
});

export const retweetsDestroy = (timeline, tweetId) => timeline.map((tweet) => {
  if (tweet.retweeted_status && tweet.retweeted_status.id_str === tweetId) {
    return {
      ...tweet,
      retweeted_status: retweetDestroy(tweet.retweeted_status)
    };
  } else if (tweet.id_str === tweetId) {
    return retweetDestroy(tweet);
  }
  return tweet;
});
