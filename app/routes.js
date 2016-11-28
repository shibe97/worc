import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './containers/Modules/App';
import HomeTimeline from './containers/Modules/HomeTimeline';
import UserTimeline from './containers/Modules/UserTimeline';
import MentionsTimeline from './containers/Modules/MentionsTimeline';
import Lists from './containers/Molecules/Lists';
import ListsTimeline from './containers/Modules/ListsTimeline';
import SearchTimeline from './containers/Modules/SearchTimeline';

export default class Routes extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route component={App} path="/">
          <IndexRoute component={HomeTimeline} />
          <Route component={HomeTimeline} path="homeTimeline" />
          <Route component={UserTimeline} path="userTimeline/:userId" />
          <Route component={MentionsTimeline} path="mentionsTimeline" />
          <Route component={Lists} path="lists" />
          <Route component={ListsTimeline} path="lists/:listId/:listName" />
          <Route component={SearchTimeline} path="searchTimeline" />
        </Route>
      </Router>
    );
  }
}
