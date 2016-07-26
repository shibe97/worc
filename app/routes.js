import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './containers/App';
import HomeTimeline from './containers/HomeTimeline';
import MentionsTimeline from './containers/MentionsTimeline';
import Lists from './containers/Lists';

export default class Routes extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route component={App} path="/">
                    <IndexRoute component={HomeTimeline} />
                    <Route component={HomeTimeline} path="homeTimeline" />
                    <Route component={MentionsTimeline} path="mentionsTimeline" />
                    <Route component={Lists} path="lists" />
                </Route>
            </Router>
        );
    }
}
