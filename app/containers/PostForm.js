import React, { Component } from 'react';
import { connect } from 'react-redux';
import storage from 'electron-json-storage';
import TwitterClient from '../utils/twitterClient';
import { inputUpdate, requestPostUpdate } from '../actions/update';

class PostForm extends Component {
    inputUpdate(e) {
        this.props.dispatch(inputUpdate(e.target.value));
    }

    postUpdate() {
        this.props.dispatch(requestPostUpdate(this.refs.text.value));
    }

    render() {
        return (
            <form className="PostForm">
                <textarea className="PostForm__textarea" placeholder="What are you doing now?" ref="text" value={this.props.data.update} onChange={this.inputUpdate.bind(this)}></textarea>
                <div className="PostForm__actions">
                    <span className="mr10px">{this.props.data.remainingCharacters}</span>
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
