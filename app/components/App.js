import React, { Component } from 'react';
import { Link } from 'react-router';
import Navigation from './Navigation';
import PostForm from '../containers/PostForm';

export default class App extends Component {
  componentDidMount() {
    this.props.requestStreamUser();
  }

  render() {
    return (
      <div className="App">
      <div className="App__left">
      <Navigation />
      </div>
      <div className="App__right">
      <PostForm />
      {this.props.children}
      </div>
      </div>
    );
  }
}
