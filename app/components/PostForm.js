import React, { Component } from 'react';

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
