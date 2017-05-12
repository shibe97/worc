import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import App from './containers/Modules/App';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Route component={App} path="/" />
      </Router>
    );
  }
}
