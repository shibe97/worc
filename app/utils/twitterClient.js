import Twitter from 'twitter';

export default class TwitterClient {
    constructor(token) {
        this.client = new Twitter({
            consumer_key        : 'AdfRer5kIrdPHmiNlYZPvxI5N',
            consumer_secret     : 'dVLTFLgg21EfUzF56PARBDyhzibwCN4HJCQ4juulwFt9VS6Vx6',
            access_token_key    : token['accessToken'],
            access_token_secret : token['accessTokenSecret']
        });
    }

    twGetPromise(api, params) {
        return new Promise((resolve, reject) => {
            this.client.get(api, params, (error, data, response) => {
                if (error) {
                    reject(new Error(error));
                } else {
                    resolve(data);
                }
            });
        });
    }

    twGet(api, params, callback) {
        return dispatch => {
            this.twGetPromise(api, params)
            .then(response => this.resolveFunc(response, callback, dispatch))
            .catch(error => this.rejectFunc(error, dispatch));
        };
    }

    twPostPromise(api, params) {
        return new Promise((resolve, reject) => {
            this.client.post(api, params, (error, data, response) => {
                if (error) {
                    reject(new Error(error));
                } else {
                    resolve(data);
                }
            });
        });
    }

    twPost(api, params, callback) {
        return dispatch => {
            this.twPostPromise(api, params)
            .then(response => this.resolveFunc(response, callback, dispatch))
            .catch(error => this.rejectFunc(error, dispatch));
        };
    }

    resolveFunc(response, callback, dispatch) {
        return dispatch(callback(response, dispatch));
    }

    rejectFunc(error, dispatch) {
        return dispatch({
            type : 'SYSTEM_ERROR'
        });
    }

    getHomeTimeline() {
        return dispatch => {
            dispatch({
                type : 'GETTING_HOME_TIMELINE'
            });
            dispatch(this.twGet('statuses/home_timeline', {count : 200}, (data) => {
                return {
                    type : 'GET_HOME_TIMELINE_SUCCESS',
                    data : data
                };
            }));
        };
    }

    getMentionsTimeline() {
        return dispatch => {
            dispatch({
                type : 'GETTING_MENTIONS_TIMELINE'
            });
            dispatch(this.twGet('statuses/mentions_timeline', {count : 200}, (data) => {
                return {
                    type : 'GET_MENTIONS_TIMELINE_SUCCESS',
                    data : data
                };
            }));
        };
    }

    postUpdate(tweet) {
        return dispatch => {
            dispatch({
                type : 'POSTING_UPDATE'
            });
            dispatch(this.twPost('statuses/update', {status : tweet}, (data) => {
                return {
                    type : 'POST_UPDATE_SUCCESS',
                    data : data
                };
            }));
        };
    }
}
