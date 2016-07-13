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

    postUpdate() {
        this.props.dispatch(this.client.postUpdate(this.refs.text.value));
    }

    render() {
        return (
            <form className="PostForm">
                <textarea className="PostForm__textarea" placeholder="What are you doing now?" ref="text"></textarea>
                <div className="PostForm__actions">
                    {
                        this.props.data.postingUpdate
                        ?
                        <input className="Button Button__normal disabled" type="button" value="Posting..." onClick={this.postUpdate.bind(this)} />
                        :
                        <input className="Button Button__normal" type="button" value="Post" onClick={this.postUpdate.bind(this)} />
                    }
                </div>
            </form>
        );
    }
}

export default connect(function (state) {
    return {
        data : state.updateReducer
    };
})(PostForm);
