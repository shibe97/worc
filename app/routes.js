import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './components/App';
import HomeTimeline from './containers/HomeTimeline';
import MentionsTimeline from './containers/MentionsTimeline';

export default class Routes extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route component={App} path="/">
                    <Route component={HomeTimeline} path="homeTimeline" />
                    <Route component={MentionsTimeline} path="mentionsTimeline" />
                    <IndexRoute component={HomeTimeline} />
                </Route>
            </Router>
        );
    }
}
