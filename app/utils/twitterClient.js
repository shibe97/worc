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

    twGetPromise(api) {
        return new Promise((resolve, reject) => {
            this.client.get(api, {count : 200},  (error, data, response) => {
                if (error) {
                    reject(new Error(error));
                } else {
                    console.log(response);
                    resolve(data);
                }
            });
        });
    }

    resolveFunc (response, callback, dispatch) {
        return dispatch(callback(response, dispatch));
    }

    rejectFunc(error, dispatch) {
        return dispatch({
            type : 'SYSTEM_ERROR'
        });
    }

    twGet(api, callback) {
        return dispatch => {
            this.twGetPromise(api)
            .then(response => this.resolveFunc(response, callback, dispatch))
            .catch(error => this.rejectFunc(error, dispatch));
        };
    }

    getHomeTimeline() {
        return dispatch => {
            dispatch({
                type : 'GETTING_HOME_TIMELINE'
            });
            dispatch(this.twGet('statuses/home_timeline', (data) => {
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
            dispatch(this.twGet('statuses/mentions_timeline', (data) => {
                return {
                    type : 'GET_MENTIONS_TIMELINE_SUCCESS',
                    data : data
                };
            }));
        };
    }
}
