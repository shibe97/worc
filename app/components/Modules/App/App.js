import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { ShortcutManager } from 'react-shortcuts';
import Menu from '../../Atoms/Menu/Menu';
import Navigation from '../../Molecules/Navigation/Navigation';
import PostForm from '../../../containers/Molecules/PostForm';
import styles from './app.css';
import keymap from '../../../keymap';
import HomeTimeline from '../../../containers/Modules/HomeTimeline';
import UserTimeline from '../../../containers/Modules/UserTimeline';
import MentionsTimeline from '../../../containers/Modules/MentionsTimeline';
import Lists from '../../../containers/Molecules/Lists';
import ListsTimeline from '../../../containers/Modules/ListsTimeline';
import SearchTimeline from '../../../containers/Modules/SearchTimeline';

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
          <Menu history={this.props.history} />
          <PostForm />
          <Route component={HomeTimeline} exact path="/" />
          <Route component={HomeTimeline} path="/homeTimeline" />
          <Route component={UserTimeline} path="/userTimeline/:userId" />
          <Route component={MentionsTimeline} path="/mentionsTimeline" />
          <Route component={Lists} exact path="/lists" />
          <Route component={ListsTimeline} path="/lists/:listId/:listName" />
          <Route component={SearchTimeline} path="/searchTimeline" />
        </div>
      </div>
    );
  }
}

App.childContextTypes = {
  shortcuts: React.PropTypes.object.isRequired
};
