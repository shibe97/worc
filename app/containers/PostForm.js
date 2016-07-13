import React, { Component } from 'react';
import { connect } from 'react-redux';
import storage from 'electron-json-storage';
import TwitterClient from '../utils/twitterClient';

class PostForm extends Component {
    componentDidMount() {
        storage.get('auth', (error, data) => {
            if (error || Object.keys(data).length === 0) {
                throw error;
            } else {
                this.client = new TwitterClient(data);
            }
        });
    }

    render() {
        return (
            <form className="PostForm">
                <textarea className="PostForm__textarea" placeholder="What are you doing now?"></textarea>
                <div className="PostForm__actions">
                    <input className="PostForm__submitButton Button Button__normal" type="button" value="Post" />
                </div>
            </form>
        );
    }
}

export default connect(function (state) {
    return {
        data : state.homeTimelineReducer
    };
})(PostForm);
