import React, { Component } from 'react';
import Textarea from './Atoms/Textarea/Textarea';
import Button from './Atoms/Button/Button';

export default class PostForm extends Component {
  render() {
    return (
      <form className="PostForm">
        <Textarea value={this.props.data.update} inputUpdate={this.props.inputUpdate} />
        <div className="PostForm__actions">
          <span className={this.props.data.remainingCharacters < 0 ? 'PostForm__overLength mr15px' : 'mr15px'}>{this.props.data.remainingCharacters}</span>
          <Button
            type="normal"
            value="Post"
            onClick={() => this.props.requestPostUpdate(this.props.data.update)}
            disabled={this.props.data.postingUpdate || this.props.data.remainingCharacters === 140 || this.props.data.remainingCharacters < 0} />
        </div>
      </form>
    );
  }
}
