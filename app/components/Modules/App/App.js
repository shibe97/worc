import React, { Component } from 'react';
import Navigation from '../../Molecules/Navigation/Navigation';
import PostForm from '../../../containers/Molecules/PostForm';
import styles from './app.css';

export default class App extends Component {
  componentDidMount() {
    this.props.requestStreamUser();
  }

  render() {
    return (
      <div>
        <div className={styles.left}>
          <Navigation resetTimeline={this.props.resetTimeline} pathname={this.props.pathname} />
        </div>
        <div className={styles.right}>
          <PostForm />
          {this.props.children}
        </div>
      </div>
    );
  }
}
