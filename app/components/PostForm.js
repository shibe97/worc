import React, { Component } from 'react';
import Button from './Atoms/Button/Button';

export default class PostForm extends Component {
  inputUpdate(e) {
    this.props.inputUpdate(e.target.value);
  }

  postUpdate() {
    this.props.requestPostUpdate(this.refs.text.value);
  }

  render() {
    return (
      <form className="PostForm">
        <textarea className="PostForm__textarea" placeholder="What's happening?" ref="text" value={this.props.data.update} onChange={this.inputUpdate.bind(this)}></textarea>
        <div className="PostForm__actions">
          <span className={this.props.data.remainingCharacters < 0 ? 'PostForm__overLength mr15px' : 'mr15px'}>{this.props.data.remainingCharacters}</span>
          <Button value="Post" disabledValue="Posting..." onClick={() => this.postUpdate()} disabled={this.props.data.postingUpdate} />
        </div>
      </form>
    );
  }
}
