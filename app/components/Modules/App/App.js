import React, { Component } from 'react';
import { ShortcutManager } from 'react-shortcuts';
import Menu from '../../Atoms/Menu/Menu';
import Navigation from '../../Molecules/Navigation/Navigation';
import PostForm from '../../../containers/Molecules/PostForm';
import styles from './app.css';
import keymap from '../../../keymap';


const shortcutManager = new ShortcutManager(keymap);

export default class App extends Component {
  getChildContext() {
    return { shortcuts: shortcutManager };
  }

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
          <Menu router={this.context.router} />
          <PostForm />
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.childContextTypes = {
  shortcuts: React.PropTypes.object.isRequired
};
App.contextTypes = {
  router: React.PropTypes.object.isRequired
};

