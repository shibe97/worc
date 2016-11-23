import Twitter from 'twitter';
import storage from 'electron-json-storage';

export default class TwitterClient {
  constructor(token) {
    this.client = new Twitter({
      consumer_key: 'ML0rRHB8yfuhxf3lR0DtTzW5j',
      consumer_secret: 'lhGbkm21g5e65fUKk3nAvG0DTQMXMQOneNymhmkex5DqFxipHy',
      access_token_key: token.accessToken,
      access_token_secret: token.accessTokenSecret
    });
    this.user_id = token.user_id;
    this.screen_name = token.screen_name;
  }

  twGetPromise(api, params) {
    return new Promise((resolve, reject) => {
      this.client.get(api, params, (error, data) => {
        if (error) {
          reject({ error });
        } else {
          resolve({ data });
        }
      });
    });
  }

  twPostPromise(api, params) {
    return new Promise((resolve, reject) => {
      this.client.post(api, params, (error, data) => {
        if (error) {
          reject(new Error(error));
        } else {
          resolve(data);
        }
      });
    });
  }

  twStream(api, params, callback) {
    this.client.stream(api, params, (stream) => {
      callback(stream);
    });
  }
}

export function createTwitterClient() {
  return new Promise((resolve, reject) => {
    storage.get('auth', (error, data) => {
      if (error || Object.keys(data).length === 0) {
        reject(new Error(error));
      } else {
        resolve(new TwitterClient(data));
      }
    });
  });
}
